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
          <ContentWrapper>{children}</ContentWrapper>
        </Layout>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  overflow: auto;
`;

export default StyledComponentsWrapper;
