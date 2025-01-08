"use client";
import styled from "styled-components";

export default function Home() {
  return <Container>Hello World!</Container>;
}

const Container = styled.div`
  ${({ theme }) => theme.fonts.bold20};
  color: ${({ theme }) => theme.colors.lime};
`;
