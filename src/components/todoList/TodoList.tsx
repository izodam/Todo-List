import { TodoListProps } from "@/types/todo";
import Image from "next/image";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import LoadingSpinner from "../common/LoadingSpinner";

// 각 todo와 done에 대해 투두 리스트를 렌더링
function TodoList({
  isTodo,
  title,
  todos,
  toggleTodoStatus,
  isLoading,
  ref,
}: TodoListProps) {
  const emptyMessage = isTodo
    ? "할 일이 없어요.\nTODO를 새롭게 추가해주세요!"
    : "아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!";

  if (isLoading) {
    return (
      <TodoSection>
        <Image
          src={`/images/${title}.svg`}
          alt="todo"
          width={101}
          height={36}
        />
        <LoadingSpinner />
      </TodoSection>
    );
  }
  return (
    <TodoSection>
      <Image src={`/images/${title}.svg`} alt="todo" width={101} height={36} />
      {todos.length > 0 ? (
        // 할일이 있다면 할일 list 렌더링
        <TodoItemsContainer>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodoStatus={toggleTodoStatus}
            />
          ))}
        </TodoItemsContainer>
      ) : (
        // 할일이 비어있다면 비어있다는 표시 렌더링
        <EmptyState>
          <Image
            src={`/images/empty_${title}_large.svg`}
            alt="Empty status"
            width={240}
            height={240}
            className="large-logo"
          />
          <Image
            src={`/images/empty_${title}_small.svg`}
            alt="Empty status"
            width={120}
            height={120}
            className="small-logo"
          />
          <EmptyText>{emptyMessage}</EmptyText>
        </EmptyState>
      )}
      <LoadingTrigger ref={ref} />
    </TodoSection>
  );
}

export default TodoList;

const TodoSection = styled.div`
  margin-top: 24px;
  flex: 1;
`;

const TodoItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;

  .small-logo {
    display: block;

    @media (min-width: 768px) {
      display: none;
    }
  }

  /* 태블릿 및 데스크탑 로고 */
  .large-logo {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

const EmptyText = styled.p`
  ${({ theme }) => theme.fonts.regular16};
  color: ${({ theme }) => theme.colors.slate[400]};
  text-align: center;
  white-space: pre-line;
`;

const LoadingTrigger = styled.div`
  height: 30px;
`;
