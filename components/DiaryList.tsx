import React from 'react';

// component
import DiaryCard from './card';

// style
import { DiaryListWrapper } from './diary/list/styled';

interface IProps {
  diaryList: any;
}

const DiaryList = ({ diaryList }: IProps) => {
  return (
    <DiaryListWrapper>
      {diaryList && diaryList.length ? (
        diaryList.map((item: any, key: number) => <DiaryCard key={key} item={item} />)
      ) : (
        <></>
      )}
    </DiaryListWrapper>
  );
};

export default DiaryList;
