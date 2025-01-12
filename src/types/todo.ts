export interface TodoItemType {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface TodoItemProps extends TodoItemType {
  toggleTodoStatus: (id: number, isCompleted: boolean) => void;
}

export interface AddTodoProps {
  hasTodo: boolean;
  addTodoState: (newTodo: TodoItemType) => void;
}

export interface TodoListProps {
  isTodo: boolean;
  title: string;
  todos: TodoItemType[];
  toggleTodoStatus: (id: number, isCompleted: boolean) => void;
}

export interface TodoListSectionProps {
  todos: TodoItemType[];
  toggleTodoStatus: (id: number, isCompleted: boolean) => void;
}
