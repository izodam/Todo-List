import { TodoItem } from "@/types/todo";
import styled from "styled-components";
import TodoList from "./TodoList";

interface TodoListSectionProps {
  todos: TodoItem[];
  toggleTodoStatus: (id: number, isCompleted: boolean) => void;
}

// 할일 리스트의 전체 부분
function TodoListSection({ todos, toggleTodoStatus }: TodoListSectionProps) {
  const todolist = todos?.filter((todo) => !todo.isCompleted);
  const doneTodolist = todos?.filter((todo) => todo.isCompleted);

  return (
    <TodoListContainer>
      <TodoList
        isTodo={true}
        title="todo"
        todos={todolist}
        toggleTodoStatus={toggleTodoStatus}
      />
      <TodoList
        isTodo={false}
        title="done"
        todos={doneTodolist}
        toggleTodoStatus={toggleTodoStatus}
      />
    </TodoListContainer>
  );
}

export default TodoListSection;

const TodoListContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
