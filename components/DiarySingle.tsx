import React from 'react';

// component
import DiaryCard from './card';

// style
import { DiarySingleWrapper } from './diary/single/styled';

interface IProps {
  item: any;
}

const DiarySingle = ({ item }: IProps) => {
  return (
    <DiarySingleWrapper>
      <DiaryCard item={item} />
    </DiarySingleWrapper>
  );
};

export default DiarySingle;
