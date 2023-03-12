import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/global-styles';
import theme from 'styles/theme';

// toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// window 객체의 kakao에 접근 가능
declare global {
  interface Window {
    Kakao: any;
  }
}

// 모든 페이지 컴포넌트를 감싸고 있는 공통 레이아웃(가장 최초로 실행됨)
// 이후 _document.tsx가 실행
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta name="description" content="다시 봄" />
        <meta name="keywords" content="다시 봄" />
        <meta name="author" content="" />
        <meta name="robots" content="all" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="다시, 봄" />
        <meta property="og:description" content="다시 보기" />
        <meta property="og:image" content="" /> */}
        <title>다시, 봄</title>
      </Head>
      <ToastContainer />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
