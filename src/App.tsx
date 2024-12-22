import styled from 'styled-components';
import Header from './components/common/Header';

function App() {
  return (
    <Home>
      <Header />
    </Home>
  );
}

const Home = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export default App;
