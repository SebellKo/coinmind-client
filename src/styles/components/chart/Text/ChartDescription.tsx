import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

function ChartDescription({ children }: Props) {
  return <StyledChartDescription>{children}</StyledChartDescription>;
}

const StyledChartDescription = styled.p`
  color: #b5b5b5;
  font-size: 14px;
  font-weight: 500;
`;

export default ChartDescription;
