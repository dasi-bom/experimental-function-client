import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

// component
import Layout from 'components/common/Layout/Layout';
import DiaryWrite from 'components/DiaryWrite';

// services
import { createDiary, uploadFile, updateDiary, getTmpId, getDiarySingle } from 'services/diary';

const DiaryWriteContainer = () => {
  const router = useRouter();
  const [tmpId, setTmpId] = useState<any>(); // url에 diaryId 없을 경우 사용할 state

  // id 발급
  const initDiaryId = () => {
    // url에 diaryId가 없으면 id 발급 받아서 저장
    getTmpId({})
      .then((res) => {
        if (res.status === 200) {
          setTmpId(res.data.message);
        } else {
          console.log('getTmpId fail');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // 제목, 본문
  const [diaryForm, setDiaryForm] = useState({
    petName: 'gomgom',
    title: '',
    content: '',
  });

  const diaryFormHandler = (e: any) => {
    e.preventDefault();

    const { name, value } = e.target;
    setDiaryForm({ ...diaryForm, [name]: value });
  };

  // 스탬프
  const [stamps, setStamps] = useState<any>([]);
  const stampHandler = (e: any) => {
    const { type } = e.currentTarget.dataset;
    let tmpArr = [...stamps];

    const itemToFind = tmpArr.find((item: any, key: number) => {
      return item.stampType === type;
    });

    if (itemToFind) {
      const idx = tmpArr.indexOf(itemToFind);
      tmpArr.splice(idx, 1);
    } else {
      tmpArr.push({ stampType: type });
    }

    setStamps(tmpArr);
  };

  // 이미지 업로드
  const [file, setFile] = useState<any>([]);
  const uploadImage = (e: any) => {
    e.preventDefault();
    setFile(e.target.files);

    const fd = new FormData();
    Array.from(e.target.files).map((file: any) => {
      fd.append('multipartFile', file);
    });

    uploadFile(fd)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // 일기 상세 조회
  const getSingle = (diaryId: number) => {
    if (diaryId) {
      // url에 diaryId가 있으면 수정하려는 게시물의 상세 조회
      getDiarySingle({ diaryId })
        .then((res) => {
          if (res.status === 200) {
            const { data } = res;

            // 조회한 데이터를 diaryForm, stamps에 저장
            // 📌 ... -> ES6 spread operator 검색
            setDiaryForm({ ...diaryForm, title: data.title, content: data.content });
            setStamps([...data.stampTypes]);
          } else {
            console.log('getDiarySingle fail');
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  // 수정인지 판별하기 위함
  useEffect(() => {
    if (router.query.diary_id) {
      // url에 diaryId가 있으면 일기 상세 조회하고 diaryForm 세팅
      getSingle(Number(router.query.diary_id));
    } else {
      // 없을 경우 id 발급 함수 실행
      initDiaryId();

      console.log(router.query.diary_id);
    }
  }, [router.query]);

  // 일기 수정
  const editDiary = (diaryId: number) => {
    updateDiary({ diaryId, title: diaryForm.title, content: diaryForm.content, stampTypes: stamps })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          const { data } = res;
          new Promise((resolve) => {
            // 성공시 알림 띄운 후 일기 리스트 페이지로 이동
            toast.success(data.message, { autoClose: 1500 });
            setTimeout(() => {
              resolve(true);
            }, 1500);
          }).then(() => {
            router.push('/diary');
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // 일기 작성
  const postDiary = () => {
    // url에 diaryId 없을 경우 위에서 발급 받은 id값 넣어주기
    createDiary({
      diaryId: tmpId,
      pet: { petName: diaryForm.petName },
      title: diaryForm.title,
      content: diaryForm.content,
      stamps,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          // 작성 성공시 일기 리스트 페이지로 이동
          router.push('/diary');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // 등록
  const submitDiaryForm = () => {
    if (router.query.diary_id) {
      // url에 diaryId가 있으면 일기 수정 함수 실행
      const diaryId = Number(router.query.diary_id);
      editDiary(diaryId);
    } else {
      // 없으면 일기 작성 함수 실행
      postDiary();
    }
  };

  console.log('diaryForm => ', diaryForm);
  console.log('stamps => ', stamps);

  return (
    <Layout>
      <DiaryWrite
        diaryId={router.query.diary_id}
        diaryForm={diaryForm}
        diaryFormHandler={diaryFormHandler}
        stamps={stamps}
        stampHandler={stampHandler}
        uploadImage={uploadImage}
        submitDiaryForm={submitDiaryForm}
      />
    </Layout>
  );
};

export default DiaryWriteContainer;
