import React from 'react';

// component
import DiaryCard from './card';

// style
import { DiaryListWrapper } from './diary/list/styled';

interface IProps {
  diaryList: any;
  cursor: number;
  petId: number;
}

const DiaryList = ({ diaryList, cursor, petId }: IProps) => {
  return (
    <DiaryListWrapper>
      {/* <DiaryCard /> */}
      {diaryList && diaryList.length ? (
        diaryList.map((item: any, key: number) => {
          <DiaryCard key={key} item={item} />;
        })
      ) : (
        <></>
      )}
    </DiaryListWrapper>
  );
};

export default DiaryList;
