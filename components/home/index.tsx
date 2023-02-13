import { useRouter } from 'next/router';
import React from 'react';

// style
import { HomeWrapper } from './styled';

const Home = () => {
  const router = useRouter();

  return (
    <HomeWrapper>
      <div className="profile-wrap">
        <div className="profile-inner">
          <div className="write-btn" onClick={() => router.push('/diary/write')}>
            <div className="bg1"></div>
            <span>일기쓰기</span>
          </div>
          <div className="again-btn" onClick={() => router.push('/diary/again')}>
            <div className="bg2"></div>
            <span>다시보기</span>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
