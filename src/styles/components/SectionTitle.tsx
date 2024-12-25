import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

function SectionTitle({ children }: Props) {
  return <StyledSectionTitle>{children}</StyledSectionTitle>;
}

const StyledSectionTitle = styled.h1`
  color: #000;
  font-size: 32px;
  font-weight: 700;
`;

export default SectionTitle;
