import type { NextPage } from 'next';
import DiaryListContainer from 'container/DiaryListContainer';

// 기본 페이지, 메인
const Home: NextPage = () => {
  return (
    <>
      <DiaryListContainer />
    </>
  );
};

export default Home;
