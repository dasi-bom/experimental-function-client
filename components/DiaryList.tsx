import React from 'react';

// component
import DiaryCard from './card';

// style
import { DiaryListWrapper } from './diary/list/styled';

interface IProps {
  diaryList: any;
  removeDiary: (diaryId: number) => void;
}

const DiaryList = ({ diaryList, removeDiary }: IProps) => {
  return (
    <DiaryListWrapper>
      {diaryList && diaryList.length ? (
        diaryList.map((item: any, key: number) => (
          // 일기 삭제 함수 받아서 DiaryCard 컴포넌트에 props로 넘겨주기
          <DiaryCard key={key} item={item} removeDiary={removeDiary} />
        ))
      ) : (
        <></>
      )}
    </DiaryListWrapper>
  );
};

export default DiaryList;
