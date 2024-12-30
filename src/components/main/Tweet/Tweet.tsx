import styled from 'styled-components';

import Section from '../../../styles/components/Section';
import SectionTitle from '../../../styles/components/SectionTitle';
import TweetItem from './TweetItem';

function Tweet() {
  return (
    <Section>
      <SectionTitle>공식 트위터</SectionTitle>
      <TweetWrapper>
        <TweetItem></TweetItem>
      </TweetWrapper>
    </Section>
  );
}

const TweetWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px 50px;
`;

export default Tweet;
