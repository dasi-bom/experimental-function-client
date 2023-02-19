/* eslint-disable padded-blocks */
import React, { useEffect, useState } from 'react';

// style
import { DiaryWriteWrapper } from './diary/write/styled';

// axios
import axios from 'axios';

interface IProps {
  diaryId: any;
}

const DiaryWrite = ({ diaryId }: IProps) => {
  console.log('diaryId ==> ', diaryId);

  // 서버로 보내기 위한 State 선언
  const [data,setData] = useState([]);
  const [diaryForm, setDiaryForm] = useState({ title: '', content: '' });
  const { title, content } = diaryForm; // 비구조화 할당을 통해 값 추출
  const [file, setFile] = useState();
  const [stamptype, setStampType] = useState([]);

  // title과 content
  const handlediaryformChange = (e: { target: { name: any; value: any; }; }) => {
    setDiaryForm({
      ...diaryForm, 
      [e.target.name]: e.target.value
    });
  };

   // const handlediaryformChange = (event: { preventDefault: () => void; target: { value: React.SetStateAction<{ title: string; content: string; }>; }; }) => {
  //   event.preventDefault();
  //   setDiaryForm(event.target.value);
  // };

  // image file
  const onChangeImg = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const formData = new FormData();
    
    if (e.target.files) {
      const uploadFile = e.target.files[0];
      formData.append('file', uploadFile);
      setFile(uploadFile);
      console.log(uploadFile);
      // console.log('===useState===');
      // console.log(file);
    }
  };

  // stamp 
  const handlestamptypeChange = (e: any) => {
    setStampType([...stamptype,])
  };
 
  // 등록 click시
  const onClickSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('file', file);
    formData.append('stamptype', stamptype);

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

  // 잘 등록됐는지 확인
  const onPrint = () => {
    console.log(file);
  };

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
            value={title} 
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
            value={content}
            className="inputfield-content" 
            placeholder="자유롭게 작성하세요:)"
            onChange={handlediaryformChange}
          >
          </textarea>
        </div>
        <form>
        <div className="write-photo">
          <span>사진</span>
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
            onChange={onChangeImg}
          ></input>
        </div>
        </form>
        <div className="write-stamp">
          <span>다시 봄 스탬프</span>
        </div>
        <div className="write-stamp-inner">
        <img src="/images/stamp1.png"/>
        <img src="/images/stamp2.png"/>
        <img src="/images/stamp3.png"/>
        <img src="/images/stamp4.png"/>
        </div><br/><br/>
        <div className="upload-btn" onClick={onClickSubmit}>
            등록
        </div>
        <button onClick={onPrint}>보기</button>
      </div>
    </DiaryWriteWrapper>
  );
};

export default DiaryWrite;
function setFile(uploadFile: any) {
  throw new Error('Function not implemented.');
}

function setPerson(arg0: any) {
  throw new Error('Function not implemented.');
}
