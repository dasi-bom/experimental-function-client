import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 390px;
  height: 60px;
  background-color: #f2f9ff;
  position: fixed;

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 30px;
  }
  .app-title {
    color: #73a2f8;
    font-weight: 400;
    font-size: 20px;
    margin: 0 auto;
    position: relative;
    left: 20px;
    font-family: 'JejuGothic';
    font-style: normal;
    cursor: pointer;
  }
  .search {
    background-image: url('../../../images/search.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 28px;
    height: 28px;
    cursor: pointer;
  }
`;
