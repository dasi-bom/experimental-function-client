import React from 'react';

// components
import Header from '../Header';
import { LayoutWrapper } from './styled';

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
};

export default Layout;
