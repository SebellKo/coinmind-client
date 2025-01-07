import styled from 'styled-components';
import Overview from './Overview/Overview';
import Tweet from './Tweet/Tweet';
import News from './News/News';

function Main() {
  return (
    <MainContainer>
      <Overview></Overview>
      <Tweet></Tweet>
      <News></News>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  max-width: 1360px;
  padding: 120px 80px;

  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export default Main;
