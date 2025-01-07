import styled from 'styled-components';

import LeftPagination from '/assets/images/pagination-left.svg';
import RightPagination from '/assets/images/pagination-right.svg';

function Pagination() {
  return (
    <PaginationContainer>
      <PaginationWrapper>
        <button>
          <img src={LeftPagination} alt="left-pagination-button"></img>
        </button>
        <PaginationItem>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>4</PaginationItem>
        <PaginationItem>5</PaginationItem>
        <button>
          <img src={RightPagination} alt="left-pagination-button"></img>
        </button>
      </PaginationWrapper>
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaginationWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PaginationItem = styled.li`
  width: 35px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50px;
  background: #fff;

  color: #5b616e;
  font-size: 12px;
  font-weight: 600;

  cursor: pointer;
`;

export default Pagination;
