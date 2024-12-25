import styled from 'styled-components';
import Overview from './Overview/Overview';

function Main() {
  return (
    <MainContainer>
      <Overview></Overview>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 120px 0;

  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export default Main;
