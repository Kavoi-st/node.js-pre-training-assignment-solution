import { TodoApi } from './todo-api';
import { Todo, TodoStatus } from './types';

export class TodoService {
  constructor(private readonly api: TodoApi) { }

  async create(title: string, description = ''): Promise<Todo> {
     if(title.length < 3 ){
        throw new Error('Title must be at least 3 characters long');
     }
     return this.api.add({ title, description });
  }

  async toggleStatus(id: number): Promise<Todo> {

    const todo = await this.api.getAll().then(todos => todos.find(t => t.id === id));
    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }
    const newStatus: TodoStatus = todo.status === TodoStatus.COMPLETED ? TodoStatus.PENDING : TodoStatus.COMPLETED;
    return this.api.update(id, { status: newStatus });
  }

  async search(keyword: string): Promise<Todo[]> {
      if(keyword.length < 3){
        throw new Error('Keyword must be at least 3 characters long');
     }
     const todos = await this.api.getAll();
     return todos.filter(todo => todo.title.toLowerCase().includes(keyword.toLowerCase()) || todo.description?.toLowerCase().includes(keyword.toLowerCase()));
  }
}
