import styled from 'styled-components';
import Header from './components/commons/Header';
import Main from './components/main/Main';
import Footer from './components/commons/Footer';

function App() {
  return (
    <Home>
      <Header />
      <Main></Main>
      <Footer></Footer>
    </Home>
  );
}

const Home = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
