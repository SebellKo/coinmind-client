import styled from 'styled-components';

import DropDownArrow from '/assets/images/arrow-drop-down.svg';

function SelectCoinButton() {
  return (
    <SelectCoinWrapper>
      <SelectCoinDropDown>
        <p>Coin</p>
        <img src={DropDownArrow} alt="drop-down-arrow"></img>
      </SelectCoinDropDown>
      <SelectCoinDropDownMenu>
        <SelectCoinItem>비트코인</SelectCoinItem>
        <SelectCoinItem>폴리곤에코시스템토큰</SelectCoinItem>
        <SelectCoinItem>이더리움네임클래식</SelectCoinItem>
      </SelectCoinDropDownMenu>
    </SelectCoinWrapper>
  );
}

const SelectCoinWrapper = styled.div`
  position: relative;
`;

const SelectCoinDropDown = styled.button`
  width: 80px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  border-radius: 50px;
  background: #f2f2f2;

  color: #000;
  font-size: 12px;
  font-weight: 500;
`;

const SelectCoinDropDownMenu = styled.ul`
  position: absolute;
  top: 40px;

  width: 110px;
  padding: 14px 15px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  border: 1px solid #ccc;
  background: #fff;
`;

const SelectCoinItem = styled.li`
  color: #b5b5b5;
  font-size: 12px;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

export default SelectCoinButton;
