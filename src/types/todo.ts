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
  isLoading: boolean;
  toggleTodoStatus: (id: number, isCompleted: boolean) => void;
  ref: React.Ref<HTMLDivElement>;
}

export interface TodoListSectionProps {
  todos: TodoItemType[];
  isLoading: boolean;
  toggleTodoStatus: (id: number, isCompleted: boolean) => void;
  todoRef: React.Ref<HTMLDivElement>;
  doneRef: React.Ref<HTMLDivElement>;
}
