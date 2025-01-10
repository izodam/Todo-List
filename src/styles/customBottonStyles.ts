import { css } from "styled-components";

// 기본 버튼 스타일
export const customButtonStyles = css`
  ${({ theme }) => theme.fonts.bold16[700]}
  min-width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.slate[900]};
  border-radius: 24px;
  box-shadow: 4px 4px ${({ theme }) => theme.colors.slate[900]};
  gap: 4px;
  cursor: pointer;

  span {
    display: block;
  }
`;
