import styled from "styled-components";
import ImageUploader from "./ImageUploader";
import Memo from "./Memo";

interface detailSectionProps {
  updateMemo: (newMemo: string) => void;
}

function DetailSection({ updateMemo }: detailSectionProps) {
  const handleImageChange = () => {
    console.log("이미지 추가");
  };

  return (
    <SectionContainer>
      <ImageUploader imageUrl={null} onImageChange={handleImageChange} />
      <Memo initialMemo={null} updateMemo={updateMemo} />
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
