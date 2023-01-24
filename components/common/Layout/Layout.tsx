import React from 'react';

// components
import Header from '../Header';

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
