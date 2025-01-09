export interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface TodoItemProps extends TodoItem {
  toggleTodoStatus: (id: number, isCompleted: boolean) => void;
}
