import React from 'react';
import { useRouter } from 'next/router';

// slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// style
import { DiarySingleLetterListWrapper } from './styled';

const DiarySingleLetterList = () => {
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
  };

  const tmpArr = Array.from({ length: 5 }, (_: any, key: number) => {
    return {
      date: `23.01.25 17:0${key}`,
      title: `#곰곰이와 산책했던 시간${key + 1}`,
      content:
        '오늘 곰곰이랑 양평 강아지 놀이터에 갔다. 곰곰이가 다른 강아지랑 잘 놀아서 얼마나 좋던지!😊',
    };
  });

  return (
    <DiarySingleLetterListWrapper>
      <div className="title-wrap">
        <h3>곰곰이와 산책했던 시간</h3>
      </div>
      <Slider {...settings}>
        {tmpArr && tmpArr.length
          ? tmpArr.map((item: any, key: number) => (
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
        <img src="/images/ios-share.png" alt="" />
      </div>
      <div className="bottom-btn" onClick={() => router.push('/diary')}>
        <span>곰곰이 일기 다시보기</span>
      </div>
    </DiarySingleLetterListWrapper>
  );
};

export default DiarySingleLetterList;
