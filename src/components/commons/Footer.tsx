import styled from 'styled-components';

import Logo from '/assets/images/logo.svg';

function Footer() {
  return (
    <FooterContainer>
      <ContentsWrapper>
        <LogoWrapper>
          <img src={Logo} alt="logo"></img>
          <LogoNameWrapper>
            <LogoTitle>coinmind</LogoTitle>
            <LogoDesc>마음속 품고있는 코인</LogoDesc>
          </LogoNameWrapper>
        </LogoWrapper>
        <Detail>
          <DetailText>contact: fulfilled_@naver.com</DetailText>
          <DetailText>
            본 사이트는 어떠한 상업적 용도로도 사용되지 않습니다.
          </DetailText>
        </Detail>
      </ContentsWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  align-items: center;

  background: #f1f3f6;
`;

const ContentsWrapper = styled.div`
  margin-left: 32px;

  display: flex;
  align-items: center;
  gap: 30px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const LogoNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoTitle = styled.h1`
  color: #000;
  font-size: 32px;
  font-weight: 700;
`;

const LogoDesc = styled.h3`
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DetailText = styled.p`
  color: #b5b5b5;
  font-size: 14px;
  font-weight: 500;
`;
export default Footer;
