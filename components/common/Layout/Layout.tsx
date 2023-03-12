import React, { useEffect } from 'react';

// components
import Header from '../Header';
import { LayoutWrapper } from './styled';

const Layout = ({ children }: any) => {
  // javascript key를 이용해서 initalize(javascript key는 env파일로 작성)
  useEffect(() => {
    window.Kakao.cleanup();
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  }, []);

  return (
    <>
      <Header />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
};

export default Layout;
