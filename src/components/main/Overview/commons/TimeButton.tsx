import styled from 'styled-components';

function TimeButton() {
  return (
    <TimeButtonGroup>
      <TimeButtonItem>5m</TimeButtonItem>
      <TimeButtonItem>15m</TimeButtonItem>
      <TimeButtonItem>30m</TimeButtonItem>
      <TimeButtonItem>1h</TimeButtonItem>
      <TimeButtonItem>1w</TimeButtonItem>
      <TimeButtonItem>1m</TimeButtonItem>
    </TimeButtonGroup>
  );
}

const TimeButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const TimeButtonItem = styled.button`
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;
  border-radius: 10px;

  color: #5b616e;

  &:hover {
    background: rgba(242, 242, 242, 0.9);
  }
`;

export default TimeButton;
