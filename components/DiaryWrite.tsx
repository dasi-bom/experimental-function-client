/* eslint-disable padded-blocks */
import React, { useEffect, useState } from 'react';

// style
import { DiaryWriteWrapper } from './diary/write/styled';

// axios(서버연결)
import axios from 'axios';

// services
import { createDiary } from 'services/diary';

interface IProps {
  diaryId: any;
}

const DiaryWrite = ({ diaryId }: IProps) => {
  console.log('diaryId ==> ', diaryId);

  // state 선언
  const [diaryForm, setDiaryForm] = useState({ title: '', content: '' });
  const [file, setFile] = useState([]);
  const [stamptype, setStampType] = useState<any>([]);

  // diaryForm(title과 content)
  const handlediaryformChange = (e: any) => {
    setDiaryForm({
      ...diaryForm,
      [e.target.name]: e.target.value,
    });
    console.log(diaryForm); // title, content 확인 완료(단독시)
  };

  // file(image file)
  const handlefileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const formData = new FormData();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      formData.append('file', uploadFile);
      setFile(uploadFile);
      console.log(uploadFile); // file 확인 완료(단독시)
    }
  };

  // stamptype(stamp)
  const handlestamptypeChange = (e: any) => {
    // console.log(e.currentTarget.dataset); // stamptype 확인 완료(단독시)
    const { type } = e.currentTarget.dataset;
    let tmpArr = [...stamptype];
    tmpArr.push({ stampType: type });
    setStampType(tmpArr);
    console.log(tmpArr);
  };

  // 등록 onClick시 서버로 전송
  const onClickSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('file', file[0]);
    formData.append('stamptype', stamptype);

    // 서버로 보내는 API
    axios({
      method: 'post',
      url: 'http://localhost:3000/DiaryWrite',
      data: formData,
    })
      .then((result) => {
        console.log('일기 등록에 성공했습니다.');
        console.log(result);
      })
      .catch((error) => {
        console.log('일기 등록에 실패했습니다.');
        console.log(error);
      });
  };

  // 📌📌📌📌📌📌📌📌📌 230224 axios 요청 예시 📌📌📌📌📌📌📌📌📌
  // const [requestDto, setRequestDto] = useState<any>({
  //   pet: { petName: '' },
  //   title: '',
  //   content: '',
  //   stamps: [{ stampType: '' }],
  // });
  // const [file, setFile] = useState([]);
  // const [thumbnail, setThumbnail] = useState<any>();

  // const uploadImage = (e: any) => {
  //   setFile(e.target.files);

  //   const preview = URL.createObjectURL(e.target.files[0]);
  //   setThumbnail(preview);
  // };

  // const submitDiaryForm = () => {
  //   const fd = new FormData();

  //   Array.from(file).map((file: any, key: number) => {
  //     fd.append('multipartFile', file);
  //   });

  //   fd.append('requestDto', requestDto);

  //   createDiary(fd)
  //     .then((res) => {
  //       console.log(res);
  //       // if 요청 성공시 처리할 코드 else 요청 실패
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  // return <>{diaryId ? <h1>일기 수정 페이지</h1> : <h1>일기 작성 페이지</h1>}</>;

  return (
    <DiaryWriteWrapper>
      <div className="write-wrap">
        <div className="user-inner">
          <span>누구의 일기인가요?</span>
          <div className="user-bg1"></div>
          <span>곰곰</span>
        </div>
        <div className="topic">임보 동물과 함께 할 수 있는 나만의 놀이를 알려주세요~</div>
        <div className="write-title">
          <span>제목</span>
          <input
            name="title"
            type="text"
            className="inputfield-title"
            placeholder="ex) 곰곰이와 0일째"
            onChange={handlediaryformChange}
          />
        </div>
        <div className="write-content">
          <span>본문</span>
          <textarea
            name="content"
            className="inputfield-content"
            placeholder="자유롭게 작성하세요:)"
            onChange={handlediaryformChange}
          ></textarea>
        </div>
        <form>
          <div className="write-photo">
            <span>사진</span>
            <label className="photo-label" htmlFor="profileImg">
              <img style={{ width: '40px' }} src="/images/add-photo.png" id="image" />
            </label>
            <input
              type="file"
              className="photo-input"
              accept="image/*"
              multiple={true}
              id="profileImg"
              onChange={handlefileChange}
            ></input>
          </div>
        </form>
        <div className="write-stamp">
          <span>다시 봄 스탬프</span>
        </div>
        <div className="write-stamp-inner">
          <img src="/images/stamp4.png" data-type={'WALK'} onClick={handlestamptypeChange} />
          <img src="/images/stamp1.png" data-type={'TREAT'} onClick={handlestamptypeChange} />
          <img src="/images/stamp3.png" data-type={'TOY'} onClick={handlestamptypeChange} />
          <img src="/images/stamp2.png" data-type={'TRAVEL'} onClick={handlestamptypeChange} />
        </div>
        <br />
        <br />

        <div className="upload-btn" onClick={handlestamptypeChange}>
          등록
        </div>
      </div>
    </DiaryWriteWrapper>
  );
};

export default DiaryWrite;
