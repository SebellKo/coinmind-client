import styled from 'styled-components';
import Section from '../../../styles/components/Section';

import LongShortChart from './charts/LongShortChart';
import UpbitCoinPriceChart from './charts/UpbitCoinPriceChart';
import LongShortVolumeChart from './charts/LongShortVolumeChart';
import CommunityShareChart from './charts/CommunityShareChart';
import SectionTitle from '../../../styles/components/SectionTitle';

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

const ChartsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 40px 30px;
`;

export default Overview;
