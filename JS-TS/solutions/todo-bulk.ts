import { Todo, TodoStatus } from './types';

export function toggleAll(state: Todo[], completed: boolean): Todo[] {
  let togstate = state.map(todo=> ({ ...todo, status: completed ? TodoStatus.COMPLETED : TodoStatus.PENDING }));
  return togstate;
}

export function clearCompleted(state: Todo[]): Todo[] {
  return state.filter(todo => todo.status !== TodoStatus.COMPLETED);
}

export function countByStatus(state: Todo[], status: TodoStatus): number {
  return state.filter(todo => todo.status === status).length;
}
