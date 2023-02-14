import type { NextPage } from 'next';
import DiaryWriteContainer from 'container/DiaryWriteContainer';

// 기본 페이지, 메인
const Home: NextPage = () => {
  return (
    <>
      <DiaryWriteContainer />
    </>
  );
};

export default Home;
