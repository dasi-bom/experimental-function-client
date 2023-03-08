import React from 'react';
import { useRouter } from 'next/router';

// slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// style
import { DiarySingleLetterListWrapper } from './styled';

// kakao
import useSNSShare from './useSNSShare';

interface IProps {
  petInfo: any;
  type: string;
  name: string;
}

const DiarySingleLetterList = ({ petInfo, type, name }: IProps) => {
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
  };

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
            <img src="/images/ios-share.png" alt="카카오로 공유하기" onClick={useSNSShare} />
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
