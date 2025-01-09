import styled from 'styled-components';

import Card from '../../../../styles/components/Card';
import ChartDescription from '../../../../styles/components/chart/Text/ChartDescription';
import ChartTitle from '../../../../styles/components/chart/Text/ChartTitle';
import TimeButton from '../commons/TimeButton';
import SelectCoinButton from '../commons/SelectCoinButton';
import ContentsWrapper from '../../../../styles/components/chart/Wrapper/ContentsWrapper';
import DetailAndButtonsWrapper from '../../../../styles/components/chart/Wrapper/DetailAndButtonsWrapper';
import DetailWrapper from '../../../../styles/components/chart/Wrapper/DetailWrapper';
import ButtonsWrapper from '../../../../styles/components/chart/Wrapper/ButtonsWrapper';
import { useState } from 'react';

function CommunityShareChart() {
  const [isClickCoinButton, setIsClickCoinButton] = useState<boolean>(false);

  return (
    <Card $type="chart">
      <ContentsWrapper>
        <DetailAndButtonsWrapper>
          <DetailWrapper>
            <ChartTitle>Long, Short & Volume</ChartTitle>
            <ChartDescription>
              커뮤니티에서 언급되는 롱,숏 데이터 차트와 코인 거래량을 비교해
              보세요.
            </ChartDescription>
          </DetailWrapper>
          <ButtonsWrapper>
            <TimeButton></TimeButton>
            <SelectCoinButton
              isClick={isClickCoinButton}
              setIsClick={setIsClickCoinButton}
            ></SelectCoinButton>
          </ButtonsWrapper>
        </DetailAndButtonsWrapper>
        <ChartArea></ChartArea>
      </ContentsWrapper>
    </Card>
  );
}

const ChartArea = styled.div`
  width: 100%;
  height: 360px;

  background: bisque;
`;

export default CommunityShareChart;
