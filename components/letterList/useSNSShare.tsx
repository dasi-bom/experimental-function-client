import { useEffect } from 'react';

// 카카오톡 공유하기 구현

interface UseSNSShareParams {
    title?: string;
    url?: string;
  }
  
  // 카카오 SDK는 window 객체에 전역으로 추가되니 TS를 위해 선언
  declare global {
    interface Window {
      Kakao: any;
    }
  }

  const useSNSShare = ({ title, url }: UseSNSShareParams) => {
    const shareToKakaoTalk = () => {
      if (window.Kakao === undefined) {
        return;
      }
  
      const kakao = window.Kakao;
  
      // 인증이 안되어 있는 경우, 인증한다.
      if (!kakao.isInitialized()) {
        // javascript key 를 이용하여 initialize
        kakao.init('19ef6355b4d2cb8afc9c439c165794be');
      }
  
      kakao.Share.sendDefault({
        objectType: 'text',
        text: title,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      });
    };
  
    const shareToNavigator = ({ text, url }: { text: string; url: string }) => {
      const sharedData = {
        text,
        url,
      };
  
      try {
        if (navigator.canShare && navigator.canShare(sharedData)) {
          navigator
            .share(sharedData)
            .then(() => {
              console.log('성공');
            })
            .catch(() => {
              console.log('취소');
            });
        }
      } catch (e) {
        console.log('실패');
      }
    };
    
    // 카카오톡 sdk 추가
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
      script.async = true;
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script); // return으로 제거해주기
      };
    }, []);
  
    return {
      isAvailNavigator: typeof navigator.share !== 'undefined',
      shareToKakaoTalk,
      shareToNavigator,
    };
  };
  
  export default useSNSShare;
