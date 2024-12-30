import styled from 'styled-components';

import DownArrow from '/assets/images/down-arrow.svg';

import Section from '../../../styles/components/Section';
import SectionTitle from '../../../styles/components/SectionTitle';
import TweetItem from './TweetItem';

function Tweet() {
  return (
    <Section>
      <SectionTitle>공식 트위터</SectionTitle>
      <TweetWrapper>
        <TweetItem></TweetItem>
        <TweetItem></TweetItem>
        <TweetItem></TweetItem>
        <TweetItem></TweetItem>
        <TweetItem></TweetItem>
        <TweetItem></TweetItem>
      </TweetWrapper>
      <MoreButtonWrapper>
        <MoreButton>
          더보기
          <img src={DownArrow} alt="down-arrow-icon"></img>
        </MoreButton>
      </MoreButtonWrapper>
    </Section>
  );
}

const MoreButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const MoreButton = styled.button`
  width: 100px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 50px;

  color: #b5b5b5;
  font-size: 12px;
  font-weight: 600;
`;

const TweetWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px 50px;
`;

export default Tweet;
