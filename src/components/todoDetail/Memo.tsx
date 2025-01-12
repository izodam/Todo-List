import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface memoProps {
  initialMemo: string;
  updateMemo: (newMemo: string) => void;
}
function Memo({ initialMemo, updateMemo }: memoProps) {
  const [memo, setMemo] = useState<string>(initialMemo);

  // 메모 textarea를 수직 가운데에 위치하기 위해 height를 동적으로 설정
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [memo]);

  // 메모 칸 중 어디를 선택해도 textarea에 포커스
  const handleMemoClick = () => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMemo = e.target.value;
    setMemo(newMemo);
    updateMemo(newMemo);
  };

  return (
    <MemoContainer onClick={handleMemoClick}>
      <Title>Memo</Title>
      <MemoInputContainer>
        <MemoInput ref={textareaRef} value={memo} onChange={handleInputChange} />
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
