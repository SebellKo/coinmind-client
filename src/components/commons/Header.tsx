import styled from 'styled-components';
import logo from '/assets/images/logo.svg';

function Header() {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo src={logo} alt="logo"></Logo>
        <LogoTitle>coinmind</LogoTitle>
      </LogoWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #f1f3f6;
  background: #fff;
`;

const LogoWrapper = styled.div`
  margin-left: 2%;

  display: flex;
  align-items: center;
  gap: 12px;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

const LogoTitle = styled.h1`
  color: #000;
  font-size: 26px;
  font-weight: 700;
`;

export default Header;
