import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// style
import { DiarySingleLetterListWrapper } from './styled';

interface IProps {
  petInfo: any;
  type: string;
  name: string;
}

// 카카오 SDK는 window 객체에 전역으로 추가되니 TS를 위해 선언
declare global {
  interface Window {
    Kakao: any;
  }
}

const DiarySingleLetterList = ({ petInfo, type, name }: IProps) => {
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
  };

  // 카카오톡 공유하기
  const shareToKakaoTalk = (userId: any) => {
    // @ts-ignore
    if (window.Kakao === undefined) {
      return;
    }
  
    const kakao = window.Kakao;
  
    // 인증이 안되어 있는 경우, 인증한다.
    if (!kakao.isInitialized()) {
      kakao.init('19ef6355b4d2cb8afc9c439c165794be');
      console.log(kakao.isInitialized());
    }
  
    // 메시지 템플릿 활용
      window.Kakao.Link.createCustomButton({
        container: '#kakao-link-btn',
        templateId: 90948,
        templateArgs: {
          userId: `${userId}`,
        },
      });
    };
    const onShareKakaoClick = () => {
      shareToKakaoTalk(userId);
    };

    // 카카오 sdk 선언
      useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
        script.async = true;

        document.body.appendChild(script);

        return () => {
        document.body.removeChild(script);
        };
      }, []);

  return (
    <DiarySingleLetterListWrapper>
      <div className="title-wrap">
        <h3>
          {name === 'gomgom'
            ? '곰곰'
            : name === 'dangdang'
            ? '당당'
            : name === 'bongbong'
            ? '봉봉'
            : ''}
          이와{' '}
          {type === 'WALK' ? '산책' : type === 'TREAT' ? '간식' : type === 'TOY' ? '장난감' : ''}
          했던 시간
        </h3>
      </div>
      {petInfo && petInfo.length > 0 && (
        <>
          <Slider {...settings}>
            {petInfo && petInfo.length
              ? petInfo.map((item: any, key: number) => (
                  <div key={key} className="slide-wrap carousel">
                    <p className="date">{item.date}</p>
                    <p className="title">{item.title}</p>
                    <div className="content-img" />

                    <p className="content">{item.content}</p>

                    <img src="/images/share.png" alt="" />
                  </div>
                ))
              : ''}
          </Slider>
          <div className="ios-share-img">
            <img 
              id="kakao-link-btn" 
              src="/images/ios-share.png" 
              alt="카카오톡 공유하기"
              onClick={onShareKakaoClick}/>
          </div>
          <div className="bottom-btn" onClick={() => router.push('/diary')}>
            <span>곰곰이 일기 다시보기</span>
          </div>
        </>
      )}
    </DiarySingleLetterListWrapper>
  );
};

export default DiarySingleLetterList;
