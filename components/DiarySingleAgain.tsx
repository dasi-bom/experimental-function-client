import { useRouter } from 'next/router';
import React from 'react';

// style
import { DiarySingleAgainWrapper } from './diary/again/styled';

const DiarySingleAgain = () => {
  const router = useRouter();

  return (
    <DiarySingleAgainWrapper>
      <div className="again-inner">
        <div className="again-image"></div>
        <div className="again-content-wrap">
          <div className="again-title">곰곰 다이어리</div>
          <div className="again-content">
            곰곰이는 00님과
            <br /> 22년 2월 1일부터 23년 1월 31일까지
            <br /> 365일 함께 했어요
          </div>
          <div className="step-btn" onClick={() => router.push('/diary/again/letter')}>
            곰곰이와의 추억을 열어보세요 {'>'}
          </div>
        </div>
      </div>
    </DiarySingleAgainWrapper>
  );
};

export default DiarySingleAgain;
