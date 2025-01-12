import { TodoListSectionProps } from "@/types/todo";
import styled from "styled-components";
import TodoList from "./TodoList";

// 할일 리스트의 전체 부분
function TodoListSection({
  todos,
  toggleTodoStatus,
  isLoading,
}: TodoListSectionProps) {
  const todolist = todos?.filter((todo) => !todo.isCompleted);
  const doneTodolist = todos?.filter((todo) => todo.isCompleted);

  return (
    <TodoListContainer>
      <TodoList
        isTodo={true}
        title="todo"
        todos={todolist}
        isLoading={isLoading}
        toggleTodoStatus={toggleTodoStatus}
      />
      <TodoList
        isTodo={false}
        title="done"
        todos={doneTodolist}
        isLoading={isLoading}
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
