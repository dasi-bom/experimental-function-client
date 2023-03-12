import React from 'react';

// component
import DiaryCard from './card';

// style
import { DiarySingleWrapper } from './diary/single/styled';

interface IProps {
  item: any;
  removeDiary: (diaryId: number) => void;
}

const DiarySingle = ({ item, removeDiary }: IProps) => {
  return (
    <DiarySingleWrapper>
      <DiaryCard item={item} removeDiary={removeDiary} />
    </DiarySingleWrapper>
  );
};

export default DiarySingle;
