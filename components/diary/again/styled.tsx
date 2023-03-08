import styled from 'styled-components';

export const DiarySingleAgainWrapper = styled.div`
  background-color: #f2f9ff;
  height: 100vh;
  padding-top: 100px;

  .again-inner {
    background-color: #00a9b4;
    width: 310px;
    height: 536px;
    margin: 0 auto;
    background: rgba(0, 169, 180, 0.08);
    border: 3px solid #00a9b4;
    border-radius: 31px;
    padding: 40px 10px 0 10px;
  }

  .again-image {
    background-image: url('../../../images/lucky.jpg');
    width: 214px;
    height: 154px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border: 2px solid #00a9b4;
    border-radius: 13px;
    margin: 0px auto;
  }
  .again-image2 {
    background-image: url('../../../images/lucky2.jpg');
  }
  .again-image3 {
    background-image: url('../../../images/lucky3.jpg');
  }

  .again-content-wrap {
    width: 241px;
    height: 202px;
    font-family: 'JejuGothic';
    font-style: normal;
    color: #787474;
    margin: 0 auto;
    padding: 0 6px;
    margin-top: 70px;
    text-align: center;
  }

  .again-title {
    font-size: 24px;
    color: #787474;
  }

  .again-content {
    font-size: 16px;
    margin-top: 40px;
    line-height: 1.5;
  }

  .step-btn {
    font-size: 16px;
    margin-top: 60px;
    background-color: #fff;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
  }

  .step-btn:hover {
    color: rgba(120, 116, 116, 0.7);
  }
`;
