import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// component
import Layout from 'components/common/Layout/Layout';
import DiarySingle from 'components/DiarySingle';

// services
import { getDiarySingle } from 'services/diary';

const DiarySingleContainer = () => {
  const router = useRouter();
  const [diaryId, setDiaryId] = useState<any>();
  const [item, setItem] = useState<any>();

  useEffect(() => {
    if (router.query.diary_id) {
      setDiaryId(Number(router.query.diary_id));
    }

    // getDiarySingle({ diaryId })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }, [router.query]);

  return (
    <Layout>
      <DiarySingle item={item} />
    </Layout>
  );
};

export default DiarySingleContainer;
