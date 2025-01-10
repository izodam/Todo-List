"use client";

import { MainContainer } from "@/styles/customMain";
import styled from "styled-components";

function DetailMain({ children }: { children: React.ReactNode }) {
  return <Main>{children}</Main>;
}

export default DetailMain;

const Main = styled.main`
  ${MainContainer}
  background-color: white;
`;
