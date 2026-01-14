import { InMemoryRepository } from './repository';
import { Todo, NewTodo } from './types';

class TodoNotFoundError extends Error {
  constructor(id: number) {
    super(`Todo with id ${id} not found`);
    this.name = 'TodoNotFoundError';
  }
}
function delay(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
      }

export class TodoApi {
  private repo = new InMemoryRepository<Todo>();

  async getAll(): Promise<Todo[]> {
    setTimeout(this.getAll,300);
    return [...this.todo.getAll()];
  }
 
  async add(newTodo: NewTodo): Promise<Todo> {
    throw new Error('add: not implemented');
  }

  async update(id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<Todo> {
    throw new Error('update: not implemented');
  }

  async remove(id: number): Promise<void> {
    throw new Error('remove: not implemented');
  }
}
