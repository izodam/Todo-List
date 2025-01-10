import Image from "next/image";
import styled from "styled-components";

interface ImageUploaderProps {
  imageUrl: string;
  onImageChange: () => void;
}

function ImageUploader({ imageUrl, onImageChange }: ImageUploaderProps) {
  return (
    <ImageContainer>
      {imageUrl.length !== 0 ? (
        <>
          <StyledImage src={imageUrl} alt="Uploaded Image" fill />
          <EditButton onClick={onImageChange}>
            <Image
              src="/icons/edit.svg"
              alt="Edit Icon"
              width={16}
              height={16}
            />
          </EditButton>
        </>
      ) : (
        <>
          <EmptyImageWrapper>
            <Image
              src="/images/empty_image.svg"
              alt="Empty Image Placeholder"
              width={64}
              height={64}
            />
          </EmptyImageWrapper>
          <AddButton onClick={onImageChange}>
            <Image
              src="/icons/plus.svg"
              alt="Add Icon"
              width={16}
              height={16}
            />
          </AddButton>
        </>
      )}
    </ImageContainer>
  );
}

export default ImageUploader;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 311px;
  border: 2px dashed ${({ theme }) => theme.colors.slate[300]};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    max-width: 384px;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 24px;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const EmptyImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddButton = styled.button`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.slate[200]};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const EditButton = styled(AddButton)`
  background-color: #0f172a80;
  border: 2px solid ${({ theme }) => theme.colors.slate[900]};
`;
