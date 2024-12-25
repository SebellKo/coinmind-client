import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

function ContentsWrapper({ children }: Props) {
  return <StyledContentsWrapper>{children}</StyledContentsWrapper>;
}

const StyledContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default ContentsWrapper;
