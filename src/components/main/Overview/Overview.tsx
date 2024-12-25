import styled from 'styled-components';
import Section from '../../../styles/components/Section';

import LongShortChart from './charts/LongShortChart';
import UpbitCoinPriceChart from './charts/UpbitCoinPriceChart';
import LongShortVolumeChart from './charts/LongShortVolumeChart';
import CommunityShareChart from './charts/CommunityShareChart';

function Overview() {
  return (
    <Section>
      <SectionTitle>Overview</SectionTitle>
      <ChartsWrapper>
        <LongShortChart></LongShortChart>
        <UpbitCoinPriceChart></UpbitCoinPriceChart>
        <LongShortVolumeChart></LongShortVolumeChart>
        <CommunityShareChart></CommunityShareChart>
      </ChartsWrapper>
    </Section>
  );
}

const SectionTitle = styled.h1`
  color: #000;
  font-size: 32px;
  font-weight: 700;
`;

const ChartsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px 30px;
`;

export default Overview;
