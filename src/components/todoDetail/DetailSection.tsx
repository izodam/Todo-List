import styled from "styled-components";
import ImageUploader from "./ImageUploader";
import Memo from "./Memo";
import { DetailSectionProps } from "@/types/todoDetail";

// 메모와 이미지 렌더링
function DetailSection({
  imageUrl,
  memo,
  updateMemo,
  handleImageChange,
}: DetailSectionProps) {
  return (
    <SectionContainer>
      <ImageUploader imageUrl={imageUrl} onImageChange={handleImageChange} />
      <Memo initialMemo={memo} updateMemo={updateMemo} />
    </SectionContainer>
  );
}

export default DetailSection;

const SectionContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
