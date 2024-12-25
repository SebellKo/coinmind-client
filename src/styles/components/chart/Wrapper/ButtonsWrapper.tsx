import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

function ButtonsWrapper({ children }: Props) {
  return <StyledButtonsWrapper>{children}</StyledButtonsWrapper>;
}

const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default ButtonsWrapper;
