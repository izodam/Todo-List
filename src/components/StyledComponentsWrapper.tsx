"use client";

import StyledComponentsRegistry from "@/lib/registry";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";
import Header from "./common/Header";

const StyledComponentsWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Header />
          <ContentWrapper>
            <Main>{children}</Main>
          </ContentWrapper>
        </Layout>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  justify-content: center;
  margin: 10px 20px;
  /* 핸드폰 설정 */
  @media (min-width: 480px) {
    margin: 16px 16px;
  }

  /* 태블릿 크기 이상 설정 */
  @media (min-width: 768px) {
    margin: 24px 24px;
  }

  /* 데스크탑 크기 이상 설정 */
  @media (min-width: 1024px) {
    margin: 24px 360px;
  }
`;

export default StyledComponentsWrapper;
