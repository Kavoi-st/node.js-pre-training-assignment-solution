import { InMemoryRepository } from './repository';
import { TodoApi } from './todo-api';
import { TodoService } from './todo-service';
import { Todo } from './types';

export class ToDoManager {
  private readonly repo: InMemoryRepository<Todo>;
  private readonly api: TodoApi;
  private readonly service: TodoService;

  constructor() {
    this.repo = new InMemoryRepository<Todo>();
    this.api = new TodoApi();
    this.service = new TodoService(this.api);
  }

  async init(): Promise<void> {
    await this.service.create('Learn TypeScript', 'Basics, types, interfaces');
    await this.service.create('Build Todo App', 'Practice async and architecture');
  }

  async add(title: string, description?: string): Promise<void> {
    await this.service.create(title, description);
  }

  async complete(id: number): Promise<void> {
    await this.service.toggleStatus(id);
  }

  async list(): Promise<Todo[]> {
    return this.api.getAll();
  }
}
