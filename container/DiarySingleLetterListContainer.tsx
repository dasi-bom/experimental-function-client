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
          if (res.status === 200) {
            setPetInfo(res.data);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [stampType, petName]);

  // 카카오톡 공유
  const doKakaoShare = () => {
    const { Kakao, location } = window;
    Kakao.Link.sendDefault({
      objectType: 'feed',
      buttonTitle: '다시 보기',
      content: {
        title: petInfo[0]?.title,
        description: petInfo[0]?.content,
        imageUrl: '../public/images/lucky.jpg',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
    });
  };

  // console.log(petInfo);

  return (
    <Layout>
      <DiarySingleLetterList
        petInfo={petInfo}
        type={type}
        name={name}
        doKakaoShare={doKakaoShare}
      />
    </Layout>
  );
};

export default DiarySingleLetterListContainer;
