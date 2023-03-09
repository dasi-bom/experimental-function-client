import React from 'react';

// style
import { DiaryWriteWrapper } from './diary/write/styled';

interface IProps {
  diaryId: any;
  diaryForm: any;
  diaryFormHandler: (e: any) => void;
  stamps: [];
  stampHandler: (e: any) => void;
  uploadImage: (e: any) => void;
  submitDiaryForm: () => void;
}

const DiaryWrite = ({
  diaryId,
  diaryForm,
  diaryFormHandler,
  stamps,
  stampHandler,
  uploadImage,
  submitDiaryForm,
}: IProps) => {
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
            onChange={diaryFormHandler}
            required // 필수값
            value={diaryForm?.title}
          />
        </div>
        <div className="write-content">
          <span>본문</span>
          <textarea
            name="content"
            className="inputfield-content"
            placeholder="자유롭게 작성하세요:)"
            onChange={diaryFormHandler}
            value={diaryForm?.content}
          ></textarea>
        </div>

        <div className="write-photo">
          <span>사진</span>
          <label className="photo-label" htmlFor="profileImg">
            <img style={{ width: '40px' }} src="/images/add-photo.png" id="image" />
          </label>
          <input
            type="file"
            className="photo-input"
            accept="image/*"
            multiple
            id="profileImg"
            onChange={uploadImage}
            required
            name="multipartFile"
          />
        </div>

        <div className="write-stamp">
          <span>다시 봄 스탬프</span>
        </div>
        <div className="write-stamp-inner">
          <img src="/images/stamp4.png" data-type={'WALK'} onClick={stampHandler} />
          <img src="/images/stamp1.png" data-type={'TREAT'} onClick={stampHandler} />
          <img src="/images/stamp3.png" data-type={'TOY'} onClick={stampHandler} />
        </div>
        <br />
        <br />
        <div className="upload-btn">
          <button onClick={submitDiaryForm}>등록</button>
        </div>
      </div>
    </DiaryWriteWrapper>
  );
};

export default DiaryWrite;
