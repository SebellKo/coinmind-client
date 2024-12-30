import styled from 'styled-components';

import Card from '../../../styles/components/Card';
import Section from '../../../styles/components/Section';
import SectionTitle from '../../../styles/components/SectionTitle';
import NewsList from './NewsList';
import Pagination from './Pagination';

function News() {
  return (
    <Section>
      <SectionTitle>최신 뉴스</SectionTitle>
      <Card $type="news">
        <NewsWrapper>
          <Date>2024년 12월 12일 (목)</Date>
          <NewsList></NewsList>
          <Pagination></Pagination>
        </NewsWrapper>
      </Card>
    </Section>
  );
}

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Date = styled.h2`
  color: #000;
  font-size: 28px;
  font-weight: 700;
`;

export default News;
