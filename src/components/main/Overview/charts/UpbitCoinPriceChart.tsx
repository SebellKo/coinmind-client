import styled from 'styled-components';

import Card from '../../../../styles/components/Card';
import ChartTitle from '../../../../styles/components/chart/Text/ChartTitle';

import TimeButton from '../commons/TimeButton';
import SelectCoinButton from '../commons/SelectCoinButton';
import ButtonsWrapper from '../../../../styles/components/chart/Wrapper/ButtonsWrapper';
import ContentsWrapper from '../../../../styles/components/chart/Wrapper/ContentsWrapper';
import DetailAndButtonsWrapper from '../../../../styles/components/chart/Wrapper/DetailAndButtonsWrapper';
import DetailWrapper from '../../../../styles/components/chart/Wrapper/DetailWrapper';
import ChartDescription from '../../../../styles/components/chart/Text/ChartDescription';

function UpbitCoinPriceChart() {
  return (
    <Card $type="chart">
      <ContentsWrapper>
        <DetailAndButtonsWrapper>
          <DetailWrapper>
            <CoinDetail>
              <ChartTitle>비트코인</ChartTitle>
              <RealTimePrice>146,000,000 KRW</RealTimePrice>
            </CoinDetail>
            <ChartDescription>
              업비트 기준 실간 변동 가격입니다.
            </ChartDescription>
          </DetailWrapper>
          <ButtonsWrapper>
            <TimeButton></TimeButton>
            <SelectCoinButton></SelectCoinButton>
          </ButtonsWrapper>
        </DetailAndButtonsWrapper>
        <ChartArea></ChartArea>
      </ContentsWrapper>
    </Card>
  );
}

const CoinDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RealTimePrice = styled.h2`
  color: #000;
  font-size: 28px;
  font-weight: 600;
`;

const ChartArea = styled.div`
  width: 100%;
  height: 360px;

  background: bisque;
`;

export default UpbitCoinPriceChart;
