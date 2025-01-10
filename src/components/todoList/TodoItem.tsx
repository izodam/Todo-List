import { TodoItemProps } from "@/types/todo";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

// 투두 리스트 각각 한줄을 렌더링
function TodoItem({ id, name, isCompleted, toggleTodoStatus }: TodoItemProps) {
  const router = useRouter();

  const goDetailPage = () => {
    router.push(`/items/${id}`);
  };
  return (
    <TodoItemContainer
      $isCompleted={isCompleted}
      onClick={() => goDetailPage()}
    >
      <Checkbox
        onClick={(e) => {
          e.stopPropagation(); // 클릭 이벤트 전파 방지
          toggleTodoStatus(id, !isCompleted);
        }}
      >
        <Image
          src={
            isCompleted ? "/icons/checkbox_checked.svg" : "/icons/checkbox.svg"
          }
          alt={isCompleted ? "Completed" : "Not completed"}
          width={32}
          height={32}
        />
      </Checkbox>
      <TodoText $isCompleted={isCompleted}>{name}</TodoText>
    </TodoItemContainer>
  );
}

export default TodoItem;

const TodoItemContainer = styled.div<{ $isCompleted: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  gap: 16px;
  padding: 12px 16px;
  border: 2px solid ${({ theme }) => theme.colors.slate[900]};
  border-radius: 27px;
  cursor: pointer;
  background-color: ${({ $isCompleted, theme }) =>
    $isCompleted ? theme.colors.violet[100] : "none"};
`;

const Checkbox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    display: block;
  }
`;

const TodoText = styled.span<{ $isCompleted: boolean }>`
  ${({ theme }) => theme.fonts.regular16}
  color: ${({ theme }) => theme.colors.slate[800]};
  text-decoration: ${({ $isCompleted }) =>
    $isCompleted ? "line-through" : "none"};
`;
