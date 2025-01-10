export interface TodoItemType {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface TodoItemProps extends TodoItemType {
  toggleTodoStatus: (id: number, isCompleted: boolean) => void;
}
