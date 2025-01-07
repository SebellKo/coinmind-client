import styled from 'styled-components';

import NewPageIcon from '/assets/images/new-page-icon.svg';
import DefaultTweetImage from '/assets/images/default-tweet-image.svg';

import Card from '../../../styles/components/Card';

function TweetItem() {
  return (
    <Card $type="tweet">
      <TweetContentsWrapper>
        <TweetHeader>
          <ProfileWrapper>
            <ProfileImage></ProfileImage>
            <ProfileDetail>
              <UserName>name</UserName>
              <UserTagId>@name</UserTagId>
              <TweetDate>Dec 17</TweetDate>
            </ProfileDetail>
          </ProfileWrapper>
          <img src={NewPageIcon} alt="new-page-icon"></img>
        </TweetHeader>
        <TweetContent>
          Testing, testing…RLUSD! We’re excited to share that Ripple USD (RLUSD)
          is now in private beta on XRP Ledger and Ethereum mainnet. RLUSD has
          not yet received regulatory approval and therefore is not available
          for purchase or trading – please be cautious of scammers who claim
          they have or can distribute Ripple USD.
        </TweetContent>
        <img src={DefaultTweetImage} alt="default-tweet-image"></img>
      </TweetContentsWrapper>
    </Card>
  );
}

const TweetContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const TweetHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileImage = styled.div`
  width: 45px;
  height: 45px;

  background-color: #3122fc;
  border-radius: 100%;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const UserName = styled.h3`
  color: #000;
  font-size: 14px;
  font-weight: 600;
`;

const UserTagId = styled.p`
  color: #b5b5b5;
  font-size: 12px;
  font-weight: 500;
`;

const TweetDate = styled.p`
  color: #b5b5b5;
  font-size: 12px;
  font-weight: 500;
`;

const TweetContent = styled.p`
  width: 100%;
  height: 90px;

  color: #000;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
`;

export default TweetItem;
