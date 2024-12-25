import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

function Section({ children }: Props) {
  return <SectionContainer>{children}</SectionContainer>;
}

const SectionContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 55px;
`;

export default Section;
