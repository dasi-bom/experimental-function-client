import styled from 'styled-components';

export const HomeWrapper = styled.div`
  .profile-wrap {
    width: 100%;
    height: 100vh;
    background-color: #f2f9ff;
    padding-top: 200px;
  }
  .profile-inner {
    width: 100%;
    height: 200px;
    display: flex;
    align-content: center;
    justify-content: space-around;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      span {
        font-size: 20px;
        padding: 12px;
        font-family: 'JejuGothic';
        font-style: normal;
        font-weight: 600;
      }
    }
  }
  .bg1 {
    background-image: url('../../images/lucky.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .bg2 {
    background-image: url('../../images/lucky.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;
