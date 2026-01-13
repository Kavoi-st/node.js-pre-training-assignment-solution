import { Todo } from './types';

export function addTodo(state: Todo[], todo: Todo): Todo[] {
  let acc: Todo[]=[];
  let i: number;
  acc=[...state];
  i=state.length;
  acc[i]=todo;
  return acc;
}

export function updateTodo(state: Todo[], id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Todo[] {
  let findid : number;
  let ttr: number = 0;
  let acc: Todo[] = state.map(todo => ({ ...todo }));
  for (findid=0; findid<state.length; findid++){
    if(state[findid].id===id){
      ttr=1;
      break;
    }
  }
  if(ttr===0){
      throw new Error('Todo not found');
    }
  if(update.title!==undefined)
    acc[findid].title=update.title;
  if(update.description!==undefined)
    acc[findid].description=update.description;
  if(update.status!==undefined)
    acc[findid].status=update.status;
  return acc;
}

export function removeTodo(state: Todo[], id: number): Todo[] {
    let findid : number;
    let ttr:number=0
   let acc: Todo[] = [];
  for (findid=0; findid<state.length; findid++){
    if(state[findid].id===id){
      ttr=1;
      break;
    }
  }
    if(ttr===0){
      throw new Error('Todo not found');
    }
  for (let i=0; i<state.length;i++){
    if(i!==findid){
    acc[i]=state[i];
    }
  }
  return acc;
}

export function getTodo(state: Todo[], id: number): Todo | undefined {
  let ttr:number=0
  let findid : number;
  for (findid=0; findid<state.length; findid++){
    if(state[findid].id===id){
      ttr=1;
      break;
    }
  }
    if(ttr===0){
      throw new Error('Todo not found');
    }
  return state[findid];
}
