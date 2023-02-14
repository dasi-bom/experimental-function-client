import styled from 'styled-components';

export const DiaryWriteWrapper = styled.div`
.write-wrap {
    width: 100%;
    height: 100vh;
  }
  .user-inner {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: flex-start;
    span {
        font-size: 15px;
        padding: 12px;
        font-family: 'JejuGothic';
        font-style: normal;
        font-weight: 600;
        div{
            cursor:pointer;
        }
   }
}
  .user-bg1 {
    background-image: url('../../images/lucky.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .topic {
    background-color: #ffa;
    width: 100%;
    height: 45px;
    margin: 0 auto;
    border: 3px solid #ffa;
    border-radius: 20px;
    padding: 15px 10px 0 10px;
    text-align:center;
    font-size:12px;
  }
  .write-title {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    span {
        font-size: 15px;
        padding: 20px;
        font-family: 'JejuGothic';
        font-style: normal;
        font-weight: 600;
    }
   .inputfield-title {
    background-color:white;
    width:100%;
    height: 45px;
   }
 }
   .write-content {
    width: 100%;
    height: 190px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    span {
        font-size: 15px;
        padding: 20px;
        font-family: 'JejuGothic';
        font-style: normal;
        font-weight: 600;
   }
   .inputfield-content {
    background-color:white;
    width:100%;
    height: 131px;
   }
 }
 .write-photo {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    span {
        font-size: 15px;
        padding: 20px;
        font-family: 'JejuGothic';
        font-style: normal;
        font-weight: 600;
   }
   .photo-label {
    margin: 15px 15px 30px 50px;
    font-weight: bold;
    font-size: 15px;
    color: #0095f6;
    display: inline-block;
    cursor: pointer;
  }
  // input태그
  .photo-input[type="file"] {
    display: none;
  }
 }
 .write-stamp {
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    span {
        font-size: 15px;
        padding: 20px;
        font-family: 'JejuGothic';
        font-style: normal;
        font-weight: 600;
   }
 }
 .write-stamp-inner {
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: space-evenly;
   .stamp-btn1 {
   
   }
   .stamp-btn2 {
    
   }
   .stamp-btn3 {
    
   }
 }
 .upload-btn {
    background-color: #ffa;
    width: 20%;
    height: 40px;
    margin: 0 auto;
    border: 3px solid #ffa;
    border-radius: 20px;
    padding: 15px 10px 0 10px;
    text-align:center;
    font-size:12px;
  }
`;
