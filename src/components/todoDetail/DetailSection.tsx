import styled from "styled-components";
import ImageUploader from "./ImageUploader";
import Memo from "./Memo";

interface detailSectionProps {
  imageUrl: string;
  memo: string;
  updateMemo: (newMemo: string) => void;
  handleImageChange: () => void;
}

function DetailSection({
  imageUrl,
  memo,
  updateMemo,
  handleImageChange,
}: detailSectionProps) {
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
