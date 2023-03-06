import React, { useEffect, useState } from 'react';

// components
import Layout from 'components/common/Layout/Layout';
import DiaryList from 'components/DiaryList';

// services
import { getDiaryList, getTmpId } from '../services/diary';

const DiaryListContainer = () => {
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
  useEffect(() => {
    getDiary();

    if (isUpdate && pageY >= scrollHeight) {
      diaryList.map((item: any, key: number) => {
        if (key === diaryList.length - 1) {
          console.log('ok');
          setCursor(item.diaryId);

          getDiaryList({ cursor })
            .then((res) => {
              if (res.status === 200) {
                const data = res.data.content;
                setDiaryList([...diaryList, ...data]);
              }
            })
            .catch((err) => {
              console.error(err);
            });
        }
      });
    }
  }, [isUpdate, cursor]);

  // console.log(diaryList);

  return (
    <Layout>
      <DiaryList diaryList={diaryList} />
    </Layout>
  );
};

export default DiaryListContainer;
