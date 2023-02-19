/* eslint-disable padded-blocks */
import React, { useRef, useState } from 'react';

// style
import { DiaryWriteWrapper } from './diary/write/styled';

// icon
import { AiFillSmile, AiFillMeh, AiFillFrown, AiFillPlusCircle } from 'react-icons/ai';

interface IProps {
  diaryId: any;
}

const DiaryWrite = ({ diaryId }: IProps) => {
  console.log('diaryId ==> ', diaryId);

  // 서버로 보내기 위한 useState
  const [diaryForm, setDiaryForm] = useState({
    title: '',
    content: ''
  });

  const { title, content } = diaryForm;
  const onChange = (e: { target: { value: any; name: any; }; }) => {
    // 이벤트를 부른 요소의 value와 name 키의 값 가져오기
    // name은 title or content
    // value는 그 때의 텍스트
    const { value, name } = e.target;

    setDiaryForm({
      ...diaryForm, // 기존 input 객체를 복사한 뒤
      [name]: value // title or content 키를 가진 값을 value로 설정
    });
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
            onChange={onChange}
          />
        </div>
        <div className="write-content">
          <span>본문</span>
          <textarea 
            name="content" 
            value={content}
            className="inputfield-content" 
            placeholder="자유롭게 작성하세요:)"
            onChange={onChange}
          >
          </textarea>
        </div>
        <div className="write-photo">
          <span>사진</span>
          <input 
            type="file" 
            className="photo-input" 
            accept="image/*"
            multiple={true} 
            id="profileImg"
          ></input>
          <label 
            className="photo-label" 
            htmlFor="profileImg"
          ><img style={{ width: '40px' }} src="/images/add-photo.png" id="image" />
          </label>
        </div>
        <div className="write-stamp">
          <span>다시 봄 스탬프</span>
        </div>
        <div className="write-stamp-inner">
        <img src="/images/stamp1.png"/>
        <img src="/images/stamp2.png"/>
        <img src="/images/stamp3.png"/>
        <img src="/images/stamp4.png"/>
        </div><br/><br/>
        <div className="upload-btn" onClick={() => {}}>
            등록
        </div>
      </div>
    </DiaryWriteWrapper>
  );
};

export default DiaryWrite;
