import type { Todo, CreateTodoInput, UpdateTodoInput, ApiResponse } from './types';
import { ApiError, NetworkError, RateLimitError } from './types';

const BASE_URL = 'https://api.example.com/v1';
const MAX_RETRIES = 3;
const BASE_DELAY_MS = 300;

type RequestInterceptor = (options: RequestInit) => RequestInit | Promise<RequestInit>;
type ResponseInterceptor = <T>(response: T) => T | Promise<T>;

const interceptors: { request: RequestInterceptor[]; response: ResponseInterceptor[] } = {
  request: [],
  response: [],
};

export function addRequestInterceptor(fn: RequestInterceptor) {
  interceptors.request.push(fn);
}

async function request<T>(path: string, options: RequestInit = {}, retries = 0): Promise<T> {
  let opts = { headers: { 'Content-Type': 'application/json' }, ...options };

  for (const interceptor of interceptors.request) {
    opts = await interceptor(opts);
  }

  let response: Response;
  try {
    response = await fetch(`${BASE_URL}${path}`, opts);
  } catch (err) {
    if (retries < MAX_RETRIES) {
      const delay = BASE_DELAY_MS * 2 ** retries + Math.random() * 100;
      await new Promise(r => setTimeout(r, delay));
      return request<T>(path, options, retries + 1);
    }
    throw new NetworkError(`Network request failed: ${(err as Error).message}`);
  }

  if (response.status === 429) {
    const retryAfter = parseInt(response.headers.get('Retry-After') ?? '1', 10);
    await new Promise(r => setTimeout(r, retryAfter * 1000));
    return request<T>(path, options, retries + 1);
  }

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new ApiError(response.status, body.message ?? response.statusText, body);
  }

  let data = (await response.json()) as T;
  for (const interceptor of interceptors.response) {
    data = await interceptor(data);
  }
  return data;
}

export const todoClient = {
  getAll: () => request<ApiResponse<Todo[]>>('/todos'),
  getById: (id: string) => request<ApiResponse<Todo>>(`/todos/${id}`),
  create: (input: CreateTodoInput) =>
    request<ApiResponse<Todo>>('/todos', { method: 'POST', body: JSON.stringify(input) }),
  update: (id: string, input: UpdateTodoInput) =>
    request<ApiResponse<Todo>>(`/todos/${id}`, { method: 'PATCH', body: JSON.stringify(input) }),
  delete: (id: string) => request<void>(`/todos/${id}`, { method: 'DELETE' }),
};
