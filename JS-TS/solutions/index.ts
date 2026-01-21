#!/usr/bin/env ts-node
// CLI entry for Task 10 – placeholder only
import { ToDoManager } from './todo-manager';

async function main() {
  const manager = new ToDoManager();
  await manager.init();

  const [, , command, ...args] = process.argv;

  try {
    switch (command) {
      case 'add': {
        const [title, description] = args;
        await manager.add(title, description);
        console.log('Todo added');
        break;
      }

      case 'complete': {
        const id = Number(args[0]);
        await manager.complete(id);
        console.log(`Todo ${id} completed`);
        break;
      }

      case 'list': {
        const todos = await manager.list();
        console.log(todos);
        break;
      }

      default:
        console.log('Commands: add | complete | list');
    }
  } catch (e) {
    console.error('Error:', (e as Error).message);
  }
}

main();

