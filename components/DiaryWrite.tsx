import React from 'react';

interface IProps {
  diaryId: any;
}

const DiaryWrite = ({ diaryId }: IProps) => {
  console.log('diaryId ==> ', diaryId);
  return <>{diaryId ? <h1>일기 수정 페이</h1> : <h1>일기 작성 페이지</h1>}</>;
};

export default DiaryWrite;
