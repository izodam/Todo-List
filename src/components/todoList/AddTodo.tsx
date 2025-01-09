import Image from "next/image";
import { useState } from "react";
import { styled } from "styled-components";
import plus_white from "../../../public/icons/plus_white.svg";
import plus_black from "../../../public/icons/plus_black.svg";
import { customButtonStyles } from "@/styles/customBottonStyles";

interface AddTodoProps {
  hasTodo: boolean;
}

function AddTodo({ hasTodo }: AddTodoProps) {
  const [inputValue, setInputValue] = useState<string>("");

  // 추가하기 버튼을 눌렀을 때 실행될 함수
  const handleAddTodo = () => {
    if (inputValue.trim()) {
      console.log(inputValue);
      setInputValue("");
    }
  };

  // 엔터 감지
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleAddTodo();
    }
  };

  return (
    <AddTodoContainer>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="할 일을 입력해주세요"
        onKeyDown={handleKeyDown}
      />
      <AddButton onClick={handleAddTodo} $hasTodo={hasTodo}>
        <Image alt="plus" src={hasTodo ? plus_black : plus_white} />
        <span>추가하기</span>
      </AddButton>
    </AddTodoContainer>
  );
}

export default AddTodo;

const AddTodoContainer = styled.div`
  display: flex;
  gap: 8px;
  height: 56px;
  margin: 16px 0;

  @media (min-width: 768px) {
    margin: 24px 0;
    gap: 16px;
  }
`;

const StyledInput = styled.input`
  ${({ theme }) => theme.fonts.regular16}
  width: 100%;
  max-width: 1016px;
  padding: 0 24px;
  border: 2px solid ${({ theme }) => theme.colors.slate[900]};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.slate[100]};
  color: ${({ theme }) => theme.colors.slate[800]};
  box-shadow: 4px 4px ${({ theme }) => theme.colors.slate[900]};

  ::placeholder {
    color: ${({ theme }) => theme.colors.slate[500]};
  }

  &:focus {
    outline: none;
  }
`;

const AddButton = styled.button<{ $hasTodo: boolean }>`
  ${customButtonStyles}

  @media (min-width: 768px) {
    min-width: 168px;
  }

  span {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;
