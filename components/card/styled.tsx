import styled from 'styled-components';

export const DiaryCardWrapper = styled.div`
  width: 350px;
  margin: 24px auto;

  .card-wrap {
    width: 100%;
    height: 370px;
    background-color: #fff;
  }
  .date {
    background-color: #f2f9ff;
    height: 26px;
    span {
      font-family: 'JejuGothic';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #73a2f8;
    }
  }
  .content-wrap {
    padding: 22px;
    display: flex;
    flex-direction: column;
  }
  .title {
    font-family: 'JejuGothic';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #545454;
  }
  .diary-images {
    background-image: url('../../images/lucky.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 200px;
    margin-top: 10px;
  }
  .content {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #000000;
    word-spacing: 2px;
    letter-spacing: 1px;
    margin-top: 20px;
  }
  .bottom-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 310px;
    margin-left: -4px;
    margin-top: 10px;
  }
  .stamp {
    background-image: url('../../images/stamp1.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 26px;
    height: 26px;
  }
  .stamp-wrap {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .stamp-wrap.active {
    background-color: rgba(217, 217, 217, 0.5);
    border: 1px solid #000000;
  }
  .button-wrap {
    button {
      font-family: 'JejuGothic';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #dc4d92;
      cursor: pointer;
    }
    span {
      color: #dc4d92;
      font-size: 12px;
      font-weight: 400;
    }
  }
`;
