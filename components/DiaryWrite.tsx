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
          <input type="text" className="inputfield-title" placeholder="ex) 곰곰이와 0일째"></input>
        </div>
        <div className="write-content">
          <span>본문</span>
          <input type="text" className="inputfield-content" placeholder=""></input>
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
          >
            <AiFillPlusCircle></AiFillPlusCircle></label>
        </div>
        <div className="write-stamp">
          <span>다시 봄 스탬프</span>
        </div>
        <div className="write-stamp-inner">
          <input type="checkbox" className="stamp-btn1" autoComplete="off"></input>
          <label htmlFor="stamp-btn1"><AiFillSmile></AiFillSmile></label>
          <input type="checkbox" className="stamp-btn2" autoComplete="off"></input>
          <label htmlFor="stamp-btn1"><AiFillMeh></AiFillMeh></label>
          <input type="checkbox" className="stamp-btn3" autoComplete="off"></input>
          <label htmlFor="stamp-btn1"><AiFillFrown></AiFillFrown></label>
        </div>
        <div className="upload-btn" onClick={() => {}}>
            등록
        </div>
      </div>
    </DiaryWriteWrapper>
  );
};

export default DiaryWrite;
