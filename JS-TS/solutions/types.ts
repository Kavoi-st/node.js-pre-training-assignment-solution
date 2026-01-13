interface Todo {
    id: number;
    title: string;
    description?:string;
    status?: TodoStatus;
    readonly createdAt: Date;
}

type NewTodo = Omit <Todo, 'id' | 'createdAt'>;

enum TodoStatus {
    PENDING ='PENDING',
    IN_PROGRESS ='IN_PROGRESS',
    COMPLETED = 'COMPLETED'
}

export { Todo, TodoStatus, NewTodo };