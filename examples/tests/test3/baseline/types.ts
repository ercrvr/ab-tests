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
  meta?: {
    total?: number;
    page?: number;
    perPage?: number;
  };
}
