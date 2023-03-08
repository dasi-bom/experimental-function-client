import { useRouter } from 'next/router';
import React from 'react';

// style
import { HomeWrapper } from './styled';

interface IProps {
  endProtection: () => void;
  isEnded: boolean;
  warningMessage: () => void;
  pet: any;
}

const Home = ({ endProtection, isEnded, warningMessage, pet }: IProps) => {
  const router = useRouter();

  return (
    <HomeWrapper>
      <div className="profile-wrap">
        <div className="profile-btn-inner">
          <div className="profile-inner">
            <div className="write-btn" onClick={() => router.push('/diary/write')}>
              <div className="bg1"></div>
              <span>일기쓰기</span>
            </div>
            <div
              className="again-btn"
              onClick={() =>
                isEnded
                  ? router.push(`/diary/again?stampType=WALK&petName=${pet?.petName}`)
                  : warningMessage()
              }
            >
              <div className="bg2"></div>
              <span>다시보기</span>
            </div>
          </div>
          <div className="finish-btn" onClick={endProtection}>
            <span>임시보호 종료하기</span>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
