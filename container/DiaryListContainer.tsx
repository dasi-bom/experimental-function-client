import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// components
import Layout from 'components/common/Layout/Layout';
import DiaryList from 'components/DiaryList';

// services
import { deleteDiary, getDiaryList, getTmpId } from '../services/diary';
import { toast } from 'react-toastify';

const DiaryListContainer = () => {
  const router = useRouter();

  const [diaryList, setDiaryList] = useState<any>([]);
  const [cursor, setCursor] = useState<any>();

  // 스크롤 이벤트
  const [pageY, setPageY] = useState(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const checkScrollTop = () => {
    const fullHeight = document.documentElement.scrollHeight;
    const top = document.documentElement.scrollTop;
    const height = document.documentElement.clientHeight;

    setPageY(top + height);
    setScrollHeight(fullHeight);

    if (top + height >= fullHeight) {
      setIsUpdate(true);
    } else {
      setIsUpdate(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  });

  // tmpId 발급
  useEffect(() => {
    getTmpId({})
      .then((res) => {
        if (res.status === 200) {
          const data = res.data.message;
          setCursor(Number(data));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // 일기 리스트 호출
  const getDiary = () => {
    getDiaryList({ cursor })
      .then((res) => {
        if (res.status === 200) {
          const data = res.data.content;
          if (diaryList.length === 0) {
            setDiaryList(data);
          }
        } else {
          console.log('getDiaryList fail');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // 맨 아래까지 스크롤 할 경우 다음 일기 리스트 호출
  const recallDiaryList = () => {
    if (isUpdate && pageY >= scrollHeight) {
      diaryList.map((item: any, key: number) => {
        if (key === diaryList.length - 1) {
          setCursor(item.diaryId);

          getDiaryList({ cursor })
            .then((res) => {
              if (res.status === 200) {
                const data = res.data.content;
                let tmpArr = [...diaryList]; // diaryList copy
                tmpArr = [...diaryList, ...data];

                // 리스트 내 중복 값 제거
                const newArr = tmpArr.filter((item: any, key: number) => {
                  return (
                    tmpArr.findIndex((ele: any, idx: number) => {
                      return item.diaryId === ele.diaryId;
                    }) === key
                  );
                });

                // 중복 값 제거된 배열을 set
                setDiaryList(newArr);
              }
            })
            .catch((err) => {
              console.error(err);
            });
        }
      });
    }
  };

  useEffect(() => {
    getDiary();
    recallDiaryList();
  }, [isUpdate, cursor]);

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
      <DiaryList diaryList={diaryList} removeDiary={removeDiary} />
    </Layout>
  );
};

export default DiaryListContainer;
