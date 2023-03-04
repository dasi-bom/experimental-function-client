/* eslint-disable padded-blocks */
import React, { useState } from 'react';

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
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState<any>([]);
  const [stamps, setStamps] = useState<any>([]);
  
  // title
  const handleTitle = (e: any) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  // content
  const handleContent = (e: any) => {
    e.preventDefault();
    setContent(e.target.value);
  };
  
  // file
  const handleFile = (e:any) => {
    e.preventDefault();
    
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(file);
    }
  };

    // stamptype
    const handleStamps = (e: any) => {
      // console.log(e.currentTarget.dataset);
      const { type } = e.currentTarget.dataset;
      let tmpArr = [...stamps];
      tmpArr.push({ stampType: type });
      setStamps(tmpArr);
      console.log(tmpArr);
    };

    // 등록 onClick
  const submitDiaryForm = (e: any) => {
    e.preventDefault();
    const requestDto = { title, content, stamps };
    console.log(requestDto);
    const formData = new FormData();

    Array.from(file).map((file: any, key: number) => {
      formData.append('multipartFile', file);
    });

    formData.append('requestDto', requestDto);

    createDiary(formData)
      .then((res) => {
        console.log(res);
        // if 요청 성공시 처리할 코드 else 요청 실패
      })
      .catch((err) => {
        console.error(err);
      });   
        // form 초기화
        setTitle('');
        setContent('');
        setStamps({
          WALK: false,
          TREAT: false,
          TOY: false,
          TRAVEL: false
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
        <div className="topic">
          임보 동물과 함께 할 수 있는 나만의 놀이를 알려주세요~
        </div>
        <div className="write-title">
          <span>제목</span>
          <input 
            name="title"  
            type="text" 
            className="inputfield-title" 
            placeholder="ex) 곰곰이와 0일째"
            onChange={handleTitle}
            required // 필수값
          />
        </div>
        <div className="write-content">
          <span>본문</span>
          <textarea 
            name="content" 
            className="inputfield-content" 
            placeholder="자유롭게 작성하세요:)"
            onChange={handleContent}
          >
          </textarea>
        </div>
        <form>
        <div className="write-photo">
          <span>사진</span>
          <form>
          <label 
            className="photo-label" 
            htmlFor="profileImg"
          ><img style={{ width: '40px' }} src="/images/add-photo.png" id="image" />
          </label>
          <input 
            type="file" 
            className="photo-input" 
            accept="image/*"
            multiple={true} 
            id="profileImg"
            onChange={handleFile}
            required
          ></input></form>
        </div>
        </form>
        <div className="write-stamp">
          <span>다시 봄 스탬프</span>
        </div>
        <div className="write-stamp-inner">
        <img src="/images/stamp4.png" data-type={'WALK'} onClick={handleStamps}/>
        <img src="/images/stamp1.png" data-type={'TREAT'} onClick={handleStamps}/>
        <img src="/images/stamp3.png" data-type={'TOY'} onClick={handleStamps}/>
        <img src="/images/stamp2.png" data-type={'TRAVEL'} onClick={handleStamps}/>
        </div><br/><br/>
        <div className="upload-btn">
        <button type="submit" onClick={submitDiaryForm}>등록</button>
        </div>
        {/* input값 모두 받았는지 확인 */}
        {JSON.stringify({
        title, content, file, stamps })}
      </div>
    </DiaryWriteWrapper>
  );
};

export default DiaryWrite;