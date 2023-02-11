import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// component
import Layout from 'components/common/Layout/Layout';
import DiaryWrite from 'components/DiaryWrite';

const DiaryWriteContainer = () => {
  const router = useRouter();
  const diaryId = router.query.diary_id;

  return (
    <Layout>
      <DiaryWrite diaryId={diaryId} />
    </Layout>
  );
};

export default DiaryWriteContainer;
