import styled from 'styled-components';

export const DiarySingleLetterWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f9ff;
  padding-top: 80px;

  .letter-wrap {
    width: 325px;
    height: 578px;
    background-color: #ffffff;
    border: 1px solid #d2d2d2;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 60px 20px;
  }

  .letter-title {
    font-family: 'JejuGothic';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #787474;
  }

  .letter-img {
    background-image: url('../../../images/lucky.jpg');
    width: 276px;
    height: 199px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 40px 0 60px 0;
  }

  .letter-date {
    font-family: 'JejuGothic';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.6;
    color: #73a2f8;
    text-align: center;
    cursor: pointer;
  }

  .letter-date:hover {
    color: rgba(115, 162, 248, 0.7);
  }
`;
