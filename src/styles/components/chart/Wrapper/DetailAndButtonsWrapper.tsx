import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

function DetailAndButtonsWrapper({ children }: Props) {
  return (
    <StyledDetailAndButtonsWrapper>{children}</StyledDetailAndButtonsWrapper>
  );
}

const StyledDetailAndButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export default DetailAndButtonsWrapper;
