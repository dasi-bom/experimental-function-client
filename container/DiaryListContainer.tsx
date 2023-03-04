import React, { useEffect, useState } from 'react';

// components
import Layout from 'components/common/Layout/Layout';
import DiaryList from 'components/DiaryList';

// services
import { getDiaryList } from '../services/diary';
import { useRouter } from 'next/router';

const DiaryListContainer = () => {
  const router = useRouter();

  const [diaryList, setDiaryList] = useState<any>([]);
  const [cursor, setCursor] = useState<number>(0);
  const [petId, setPetId] = useState<number>(0);

  useEffect(() => {
    // getDiaryList({ cursor, petId })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }, [cursor, petId]);

  return (
    <Layout>
      <DiaryList diaryList={diaryList} cursor={cursor} petId={petId} />
    </Layout>
  );
};

export default DiaryListContainer;
