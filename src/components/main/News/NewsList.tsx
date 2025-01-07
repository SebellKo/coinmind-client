import styled from 'styled-components';
import NewsItem from './NewsItem';

function NewsList() {
  return (
    <NewsListContainer>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
    </NewsListContainer>
  );
}

const NewsListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 35px 80px;
`;

export default NewsList;
