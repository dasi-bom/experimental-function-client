import React, { useState } from 'react';
import { useRouter } from 'next/router';

// component
import Layout from 'components/common/Layout/Layout';
import DiaryWrite from 'components/DiaryWrite';

// services
import { createDiary, uploadFile } from 'services/diary';

const DiaryWriteContainer = () => {
  const router = useRouter();
  const diaryId = router.query.diary_id;

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

  // 등록
  const submitDiaryForm = () => {
    createDiary({
      pet: { petName: diaryForm.petName },
      title: diaryForm.title,
      content: diaryForm.content,
      stamps,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // console.log('diaryForm => ', diaryForm);
  // console.log('stamps => ', stamps);
  // console.log('file => ', file);

  return (
    <Layout>
      <DiaryWrite
        diaryId={diaryId}
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
