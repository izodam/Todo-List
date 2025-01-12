import { customButtonStyles } from "@/styles/customBottonStyles";
import { ButtonSectionProps } from "@/types/todoDetail";
import Image from "next/image";
import styled from "styled-components";

function ButtonSection({ isEdit, deleteTodo, editTodo }: ButtonSectionProps) {
  return (
    <ButtonSectionContainer>
      <EditButton $isEdit={isEdit} onClick={editTodo}>
        <Image src="/icons/check.svg" alt="edit" width={16} height={16} />
        <span>수정 완료</span>
      </EditButton>
      <DeleteButton onClick={deleteTodo}>
        <Image src="/icons/delete.svg" alt="edit" width={16} height={16} />
        <span>삭제s하기</span>
      </DeleteButton>
    </ButtonSectionContainer>
  );
}

export default ButtonSection;

const ButtonSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 16px 0;

  @media (min-width: 1024px) {
    justify-content: end;
  }
`;

const EditButton = styled.button<{ $isEdit: boolean }>`
  ${customButtonStyles}
  width: 168px;
  height: 56px;
  background-color: ${({ $isEdit, theme }) =>
    $isEdit ? theme.colors.lime : theme.colors.slate[200]};
`;

const DeleteButton = styled.button`
  ${customButtonStyles}
  width: 168px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.rose};
  color: white;
`;
