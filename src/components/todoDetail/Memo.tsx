import { useState } from "react";
import styled from "styled-components";

interface memoProps {
  initialMemo: string;
  updateMemo: (newMemo: string) => void;
}
function Memo({ initialMemo, updateMemo }: memoProps) {
  const [memo, setMemo] = useState<string>(initialMemo);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMemo = e.target.value;
    setMemo(newMemo);
    updateMemo(newMemo);
  };
  return (
    <MemoContainer>
      <Title>Memo</Title>
      <MemoInputContainer>
        <MemoInput value={memo} onChange={handleInputChange} />
      </MemoInputContainer>
    </MemoContainer>
  );
}

export default Memo;

const MemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 311px;
  background: url("/images/memo.svg") no-repeat center/cover;
  border-radius: 24px;
  padding: 24px;
  gap: 16px;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.bold16[800]}
  color: ${({ theme }) => theme.colors.amber}
`;

const MemoInputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MemoInput = styled.textarea`
  ${({ theme }) => theme.fonts.regular16}
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  resize: none;
  overflow-y: auto;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fde68a;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: none;
  }
`;
