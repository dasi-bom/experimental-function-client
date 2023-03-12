import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

// component
import Layout from 'components/common/Layout/Layout';
import DiarySingle from 'components/DiarySingle';

// services
import { deleteDiary, getDiarySingle } from 'services/diary';

const DiarySingleContainer = () => {
  const router = useRouter();
  const [diaryId, setDiaryId] = useState<any>(1);
  const [item, setItem] = useState<any>();

  useEffect(() => {
    if (router.query.diary_id) {
      setDiaryId(Number(router.query.diary_id));
      getDiarySingle({ diaryId: Number(router.query.diary_id) })
        .then((res) => {
          if (res.status === 200) {
            const { data } = res;

            setItem(data);
          } else {
            console.log('getDiarySingle fail');
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [router.query]);

  // 일기 삭제
  const removeDiary = (diaryId: number) => {
    deleteDiary({ diaryId })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          // 정상적으로 삭제가 되면 새로고침
          router.reload(); // 📌 삭제 성공시 리스트 호출을 다시 하면 되는데 현재 로직으로는 새로고침 사용(추후에 수정 필요)
        } else {
          toast.error('관리자에게 문의해주세요.');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Layout>
      <DiarySingle item={item} removeDiary={removeDiary} />
    </Layout>
  );
};

export default DiarySingleContainer;
