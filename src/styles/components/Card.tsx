import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  $type: string;
}

function Card({ children, $type }: Props) {
  return <CardContainer $type={$type}>{children}</CardContainer>;
}

const CardContainer = styled.div<{
  $type: string;
}>`
  ${({ $type }) => {
    if ($type === 'chart') return 'width: 581px;';
    if ($type === 'tweet') return 'width: 380px;';
    if ($type === 'news') return 'width: 1180px;';
  }}

  ${({ $type }) => {
    if ($type === 'chart') return 'padding: 35px 42px';
    if ($type === 'tweet') return 'padding: 26px 20px';
    if ($type === 'news') return 'padding: 48px 90px';
  }};
  border-radius: 15px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2),
    0px 4px 24px 0px rgba(88, 102, 126, 0.08);
  background: #fff;
`;

export default Card;
