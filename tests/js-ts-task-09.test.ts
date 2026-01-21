import { TodoApi } from '../JS-TS/solutions/todo-api';
import { TodoStatus } from '../JS-TS/solutions/types';

describe('Task 9 Tests + MockTimer', () => {

  let service: TodoApi;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    service = new TodoApi();
  });

  test('GetAll', async () => {
    const promise = service.add({ title: 'Test', description: 'Testing' });
    jest.runAllTimers();
    const todo = await promise;

    expect(todo.title).toBe('Test');

    const removePromise = service.remove(todo.id);
    jest.runAllTimers();
    await removePromise;
  });

  test('Update', async () => {
    const addPromise = service.add({ title: 'Test', description: 'Testing' });
    jest.runAllTimers();
    const todo = await addPromise;

    const updatePromise = service.update(todo.id, { status: TodoStatus.COMPLETED });
    jest.runAllTimers();
    const updated = await updatePromise;

    expect(updated.status).toBe(TodoStatus.COMPLETED);

    const removePromise = service.remove(todo.id);
    jest.runAllTimers();
    await removePromise;
  });

  test('Remove', async () => {
    const addPromise = service.add({ title: 'Test', description: 'Testing' });
    jest.runAllTimers();
    const todo = await addPromise;

    const removePromise = service.remove(todo.id);
    jest.runAllTimers();
    await removePromise;

    const getPromise = service.getAll();
    jest.runAllTimers();
    const all = await getPromise;

    expect(all.length).toBe(0);
  });

 
test('Error id', async () => {
    const addPromise = service.add({ title: 'Test', description: 'Testing' });
    jest.runAllTimers();
    const todo = await addPromise;

    const removePromise = service.remove(999);
    jest.runAllTimers();

    await expect(removePromise).rejects.toBeInstanceOf(Error);
  });
});
