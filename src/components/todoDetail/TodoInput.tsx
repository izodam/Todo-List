import { TodoInputProps } from "@/types/todoDetail";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// 투두 제목 (input 창)
function TodoInput({
  initialName,
  isCompleted,
  updateTodoName,
  toggleIsCompleted,
}: TodoInputProps) {
  const [name, setName] = useState<string>(initialName);

  // input창 width를 동적으로 설정
  const [inputWidth, setInputWidth] = useState<number>(0);
  const hiddenElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hiddenElementRef.current) {
      setInputWidth(hiddenElementRef.current.clientWidth);
    }
  }, [name]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    updateTodoName(newName);
  };

  return (
    <NameContainer $isCompleted={isCompleted}>
      <Checkbox onClick={toggleIsCompleted}>
        <Image
          src={
            isCompleted ? "/icons/checkbox_checked.svg" : "/icons/checkbox.svg"
          }
          alt={isCompleted ? "Completed" : "Not completed"}
          width={32}
          height={32}
        />
      </Checkbox>
      <InputWrapper>
        <HiddenText ref={hiddenElementRef} aria-hidden="true">
          {name}
        </HiddenText>
        <NameInput
          type="text"
          value={name}
          onChange={handleInputChange}
          style={{ width: `${inputWidth}px` }}
        />
      </InputWrapper>
    </NameContainer>
  );
}

export default TodoInput;

const NameContainer = styled.div<{ $isCompleted: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  padding: 0 24px;
  margin: 16px 0;
  border: 2px solid ${({ theme }) => theme.colors.slate[900]};
  border-radius: 24px;
  gap: 16px;
  background-color: ${({ $isCompleted, theme }) =>
    $isCompleted ? theme.colors.violet[200] : "white"};
  overflow: hidden;

  @media (min-width: 768px) {
    margin: 24px 0;
  }
`;

const Checkbox = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    display: block;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
`;

const HiddenText = styled.div`
  ${({ theme }) => theme.fonts.bold20}
  visibility: hidden;
  height: 0;
  white-space: nowrap;
  position: absolute;
`;

const NameInput = styled.input`
  ${({ theme }) => theme.fonts.bold20}
  border: none;
  outline: none;
  background: none;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.slate[900]};
  white-space: nowrap;
  max-width: 100%;
`;
