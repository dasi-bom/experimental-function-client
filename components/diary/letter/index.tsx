import { useRouter } from 'next/router';
import React from 'react';

// style
import { DiarySingleLetterWrapper } from './styled';

const DiarySingleLetter = () => {
  const router = useRouter();

  return (
    <DiarySingleLetterWrapper>
      <div className="letter-wrap">
        <div className="letter-title">곰곰이와 산책했던 시간</div>
        <div className="letter-img"></div>
        <div className="letter-date" onClick={() => router.push('/diary/again/letter/0')}>
          23년 1월 25일에 쓴<br />
          일기가 날아왔어요
        </div>
      </div>
    </DiarySingleLetterWrapper>
  );
};

export default DiarySingleLetter;
