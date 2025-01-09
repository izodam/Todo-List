import { css } from "styled-components";

// 기본 버튼 스타일
export const customButtonStyles = css<{ $hasTodo?: boolean }>`
  ${({ theme }) => theme.fonts.bold16[700]}
  min-width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.slate[900]};
  border-radius: 24px;
  box-shadow: 4px 4px ${({ theme }) => theme.colors.slate[900]};
  gap: 4px;
  background-color: ${({ $hasTodo: $isActive, theme }) =>
    $isActive ? theme.colors.slate[200] : theme.colors.violet[600]};
  color: ${({ $hasTodo: $isActive, theme }) =>
    $isActive ? theme.colors.slate[900] : "white"};

  span {
    display: block;
  }
`;
