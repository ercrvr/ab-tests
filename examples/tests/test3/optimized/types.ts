export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface CreateTodoInput {
  title: string;
  userId: string;
}

export interface UpdateTodoInput {
  title?: string;
  completed?: boolean;
}

export interface ApiResponse<T> {
  data: T;
  meta?: { total?: number; page?: number; perPage?: number };
}

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
    public readonly body?: unknown
  ) {
    super(`[${status}] ${message}`);
    this.name = 'ApiError';
  }
}

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

export class RateLimitError extends ApiError {
  constructor(public readonly retryAfter: number) {
    super(429, `Rate limited. Retry after ${retryAfter}s`);
    this.name = 'RateLimitError';
  }
}
