import { css } from "styled-components";

export const MainContainer = css`
  justify-content: center;
  max-width: 1200px;
  height: calc(100vh - 64px);
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;
  /* 태블릿 크기 이상 설정 */
  @media (min-width: 768px) {
    padding: 0 24px;
  }

  /* 데스크탑 크기 이상 설정 */
  @media (min-width: 1024px) {
    padding: 0 32px;
  }
`;
