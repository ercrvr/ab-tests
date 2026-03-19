import type { Todo, CreateTodoInput, UpdateTodoInput, ApiResponse } from './types';

const BASE_URL = 'https://api.example.com/v1';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export const todoClient = {
  getAll(): Promise<ApiResponse<Todo[]>> {
    return request('/todos');
  },

  getById(id: string): Promise<ApiResponse<Todo>> {
    return request(`/todos/${id}`);
  },

  create(input: CreateTodoInput): Promise<ApiResponse<Todo>> {
    return request('/todos', {
      method: 'POST',
      body: JSON.stringify(input),
    });
  },

  update(id: string, input: UpdateTodoInput): Promise<ApiResponse<Todo>> {
    return request(`/todos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(input),
    });
  },

  delete(id: string): Promise<void> {
    return request(`/todos/${id}`, { method: 'DELETE' });
  },
};
