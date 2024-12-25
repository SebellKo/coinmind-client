import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

function DetailWrapper({ children }: Props) {
  return <StyledDetailWrapper>{children}</StyledDetailWrapper>;
}

const StyledDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default DetailWrapper;
