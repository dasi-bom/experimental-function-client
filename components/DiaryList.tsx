import React from 'react';

// component
import DiaryCard from './card';

// style
import { DiaryListWrapper } from './diary/list/styled';

const DiaryList = () => {
  return (
    <DiaryListWrapper>
      <DiaryCard />
      <DiaryCard />
      <DiaryCard />
    </DiaryListWrapper>
  );
};

export default DiaryList;
