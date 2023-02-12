import { useRouter } from 'next/router';
import React from 'react';

// style
import { HeaderWrapper } from './styled';

const Header = () => {
  const router = useRouter();
  return (
    <HeaderWrapper>
      <div className="header-inner">
        <p className="app-title" onClick={() => router.push('/')}>
          다시, 봄
        </p>
        <div className="search" />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
