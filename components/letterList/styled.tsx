import styled from 'styled-components';

export const DiarySingleLetterListWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f9ff;
  padding-top: 60px;

  .title-wrap {
    font-family: 'JejuGothic';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    color: #787474;
  }

  .slide-wrap {
    width: 325px;
    height: 434px;
    background: #ffffff;
    border: 1px solid #d2d2d2;
    margin: 80px auto 0 auto;
    padding: 26px;

    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }

  .date {
    font-family: 'JejuGothic';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    color: #73a2f8;
  }

  .title {
    font-family: 'JejuGothic';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
    color: #545454;
    padding: 14px 0;
  }

  .content-img {
    background-image: url('../../../images/lucky.jpg');
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .content {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
    word-spacing: 2px;
    letter-spacing: 1.2px;
    padding: 12px 0;
  }

  .bottom-btn {
    width: 208px;
    height: 46px;
    background: #fff9c8;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    cursor: pointer;

    span {
      font-family: 'JejuGothic';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 22px;
      color: #73a2f8;
    }
  }
  .ios-share-img {
    padding: 10px 14px;
    float: right;

    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
`;
