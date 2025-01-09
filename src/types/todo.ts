export interface TodoItem {
  id: string;
  name: string;
  isCompleted: boolean;
}

export interface TodoItemProps extends TodoItem {
  toggleTodoStatus: (id: string) => void;
}
