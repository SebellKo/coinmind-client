import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

function ChartTitle({ children }: Props) {
  return <StyledChartTitle>{children}</StyledChartTitle>;
}

const StyledChartTitle = styled.h2`
  color: #000;
  font-size: 24px;
  font-weight: 600;
`;

export default ChartTitle;
