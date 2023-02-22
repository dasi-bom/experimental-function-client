/* eslint-disable padded-blocks */
import React, { useEffect, useState } from 'react';

// style
import { DiaryWriteWrapper } from './diary/write/styled';

// axios(서버연결)
// import axios from 'axios';

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
      [e.target.name]: e.target.value
    });
    console.log(diaryForm); 
  };
  
  // file(image file)
  const handlefileChange = (e: { preventDefault: () => void; target: { files: string | any[]; }; }) => {
    e.preventDefault();
    // 선택된 file이 없으면 리턴
    console.log(e.target.files);
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    // file 서버로 전송
    const formData = new FormData();
    formData.append('photo', e.target.files[0], e.target.files[0].name);
    // axios.post('/api/admin/photo', formData)
    //   .then((response: { data: { data: React.SetStateAction<never[]>; }; }) => {
    //     console.log(response.data);
    //     setFile(response.data.data);
    //   });
  };

  // stamptype(stamp) 
  const handlestamptypeChange = (e: any) => {
    // console.log(e.currentTarget.dataset); // 
    const { type } = e.currentTarget.dataset;
    let tmpArr = [...stamptype];
    tmpArr.push({ stampType: type });
    setStampType(tmpArr);
    console.log(tmpArr);
  };
 
  // 등록 onClick시 서버로 전송
  // const submit = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();

  //   // 각 input별 글자수 등 제한두기
  //   const form = document.getElementById('form');
  //   console.log(form.checkValidity());
  //   if (!form.checkValidity()) {
  //     form.classList.add('was-validated');
  //     return;
  //   }
    
  //   const sendForm = { diaryForm, file, stamptype };
  //   console.log(sendForm);
    
  //   axios.post('/api/admin/hero', sendForm)
  //     .then((response: { data: any; }) => {
  //       console.log(response.data);
  //       // form 초기화
  //       setDiaryForm('');
  //       setFile('');
  //       setStampType({
  //         WALK: false,
  //         TREAT: false,
  //         TOY: false,
  //         TRAVEL: false
  //       });
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
        {/* input값 받는 곳부터 form 형식 */}
        {/* <form onSubmit={submit} noValidate id="form"> */}
        <div className="write-title">
          <span>제목</span>
          <input 
            name="title"  
            type="text" 
            className="inputfield-title" 
            placeholder="ex) 곰곰이와 0일째"
            onChange={handlediaryformChange}
            required // 필수값
          />
        </div>
        <div className="write-content">
          <span>본문</span>
          <textarea 
            name="content" 
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
            onChange={handlefileChange}
            required
          ></input>
        </div>
        </form>
        <div className="write-stamp">
          <span>다시 봄 스탬프</span>
        </div>
        <div className="write-stamp-inner">
        <img src="/images/stamp4.png" data-type={'WALK'} onClick={handlestamptypeChange}/>
        <img src="/images/stamp1.png" data-type={'TREAT'} onClick={handlestamptypeChange}/>
        <img src="/images/stamp3.png" data-type={'TOY'} onClick={handlestamptypeChange}/>
        <img src="/images/stamp2.png" data-type={'TRAVEL'} onClick={handlestamptypeChange}/>
        </div><br/><br/>
        <div className="upload-btn">
        <button type="submit">등록</button>
        </div>
        {/* input값 모두 받았는지 확인 */}
        {JSON.stringify({
        diaryForm, file, stamptype })}
        {/* </form> */}
      </div>
    </DiaryWriteWrapper>
  );
};

export default DiaryWrite;