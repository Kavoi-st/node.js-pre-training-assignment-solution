import { InMemoryRepository } from './repository';
import { Todo, NewTodo } from './types';

class TodoNotFoundError extends Error {
  constructor(id: number) {
    super(`Todo with id ${id} not found`);
    this.name = 'TodoNotFoundError';
  }
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export class TodoApi {
  private repo = new InMemoryRepository<Todo>();

  async getAll(): Promise<Todo[]> {
    await delay(300);
    return this.repo.findAll();
  }

  async add(newTodo: NewTodo): Promise<Todo> {
    await delay(300);

    const todo: Todo = {...newTodo, id: Date.now(), createdAt: new Date()};

    return this.repo.add(todo);
  }

  async update(
    id: number,
    update: Partial<Omit<Todo, 'id' | 'createdAt'>>
  ): Promise<Todo> {
    await delay(300);

    const todo = this.repo.findAll().find(t => t.id === id);
    if (!todo) {
      throw new TodoNotFoundError(id);
    }

    const updated: Todo = {...todo, ...update };

    this.repo.update(id, updated);
    return updated;
  }

  async remove(id: number): Promise<void> {
    await delay(300);

    const exists = this.repo.findAll().some(t => t.id === id);
    if (!exists) {
      throw new TodoNotFoundError(id);
    }

    this.repo.remove(id);
  }
}
