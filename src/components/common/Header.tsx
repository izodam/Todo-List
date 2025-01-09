"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";

function Header() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/"); // '/' 페이지로 이동
  };

  return (
    <HeaderContainer>
      <Logo onClick={handleLogoClick}>
        <img
          src="/images/Size=Small.svg"
          alt="do it logo small"
          className="small-logo"
        />
        <img
          src="/images/Size=Large.svg"
          alt="do it logo large"
          className="large-logo"
        />
      </Logo>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.slate[200]};

  @media (min-width: 768px) {
    padding: 0 24px;
  }
  /* 데스크탑 레이아웃 */
  @media (min-width: 1024px) {
    padding: 0 360px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  /* 모바일 로고 */
  .small-logo {
    display: block;

    @media (min-width: 768px) {
      display: none;
    }
  }

  /* 태블릿 및 데스크탑 로고 */
  .large-logo {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;
