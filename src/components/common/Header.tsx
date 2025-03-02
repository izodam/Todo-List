"use client";

import Image from "next/image";
import styled from "styled-components";

function Header() {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo onClick={handleLogoClick}>
          <Image
            src="/images/Size=Small.svg"
            alt="do it logo small"
            width={71}
            height={40}
            className="small-logo"
          />
          <Image
            src="/images/Size=Large.svg"
            alt="do it logo large"
            width={151}
            height={40}
            className="large-logo"
          />
        </Logo>
      </LogoContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.slate[200]};
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;
  height: 60px;

  @media (min-width: 768px) {
    padding: 0 24px;
  }
  /* 데스크탑 레이아웃 */
  @media (min-width: 1024px) {
    padding: 0 32px;
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
