import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// component
import Layout from 'components/common/Layout/Layout';
import DiarySingleLetterList from 'components/letterList';

// services
import { getAgainDiary } from 'services/diary';

const DiarySingleLetterListContainer = () => {
  const router = useRouter();
  const { stampType, petName } = router.query;
  const [type, setType] = useState<any>();
  const [name, setName] = useState<any>();

  const [petInfo, setPetInfo] = useState<any>();

  useEffect(() => {
    if (stampType && petName) {
      setType(stampType);
      setName(petName);
    }
  }, [router.query]);

  useEffect(() => {
    if (stampType && petName) {
      // console.log(stampType);
      // console.log(petName);

      getAgainDiary({
        stampType,
        petName,
      })
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            setPetInfo(res.data);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [stampType, petName]);

  return (
    <Layout>
      <DiarySingleLetterList petInfo={petInfo} type={type} name={name} />
    </Layout>
  );
};

export default DiarySingleLetterListContainer;
