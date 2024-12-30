import styled from 'styled-components';

function NewsItem() {
  return (
    <NewsItemContainer>
      <NewsItemDetail>
        <NewsItemTitle>
          '비트코인 예수' 로저 버, 탈세 혐의 반박..."암호화폐 탄압의 일환"
        </NewsItemTitle>
        <NewsItemDate>11 Dec 2024 23:30</NewsItemDate>
      </NewsItemDetail>
      <NewsItemContent>
        '비트코인 예수(Bitcoin Jesus)'로 알려진 로저 버(Roger Ver)가 미국
        법무부(DOJ)가 제기한 탈세 혐의를 강하게 부인했다. 로저 버는 2014년 미국
        시민권을 포기했으며, 2023년 스페인에서 체포된 후 현재 미국으로의 송환
        절차를 진행 중이다. DOJ는
      </NewsItemContent>
    </NewsItemContainer>
  );
}

const NewsItemContainer = styled.li`
  width: 550px;

  display: flex;
  flex-direction: column;

  gap: 15px;
`;

const NewsItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NewsItemTitle = styled.h3`
  color: #000;
  font-size: 18px;
  font-weight: 600;
`;

const NewsItemDate = styled.p`
  color: #b5b5b5;
  font-size: 14px;
  font-weight: 400;
`;

const NewsItemContent = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 400;
`;
export default NewsItem;
