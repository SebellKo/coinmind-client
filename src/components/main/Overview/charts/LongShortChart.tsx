import styled from 'styled-components';

import Check from '/assets/images/check-box-icon.svg';

import Card from '../../../../styles/components/Card';
import ChartDescription from '../../../../styles/components/chart/Text/ChartDescription';
import ChartTitle from '../../../../styles/components/chart/Text/ChartTitle';
import TimeButton from '../commons/TimeButton';
import SelectCoinButton from '../commons/SelectCoinButton';
import ButtonsWrapper from '../../../../styles/components/chart/Wrapper/ButtonsWrapper';
import ContentsWrapper from '../../../../styles/components/chart/Wrapper/ContentsWrapper';
import DetailAndButtonsWrapper from '../../../../styles/components/chart/Wrapper/DetailAndButtonsWrapper';
import DetailWrapper from '../../../../styles/components/chart/Wrapper/DetailWrapper';

function LongShortChart() {
  return (
    <Card $type="chart">
      <ContentsWrapper>
        <DetailAndButtonsWrapper>
          <DetailWrapper>
            <ChartTitle>Long, Short & Chart</ChartTitle>
            <ChartDescription>
              커뮤니티에서 언급되는 롱,숏 데이터 차트와 코인 차트를 비교해
              보세요.
            </ChartDescription>
          </DetailWrapper>
          <ButtonsWrapper>
            <TimeButton></TimeButton>
            <SelectCoinButton></SelectCoinButton>
            <ChartActiveButton>
              <p>on/off</p>
              <img src={Check} alt="check-box-icon"></img>
            </ChartActiveButton>
          </ButtonsWrapper>
        </DetailAndButtonsWrapper>
        <ChartArea></ChartArea>
      </ContentsWrapper>
    </Card>
  );
}

const ChartActiveButton = styled.button`
  width: 35px;
  height: 35px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  background: #fff;

  color: #5b616e;
  font-size: 8px;
  font-weight: 600;
`;

const ChartArea = styled.div`
  width: 100%;
  height: 360px;

  background: bisque;
`;

export default LongShortChart;
