import { useRouter } from 'next/router';
import React from 'react';

// slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// style
import { DiarySingleAgainWrapper } from './diary/again/styled';

interface IProps {}

const DiarySingleAgain = ({}: IProps) => {
  const router = useRouter();
  const { stampType, petName } = router.query;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
  };

  return (
    <DiarySingleAgainWrapper>
      <Slider {...settings}>
        {petName === 'gomgom' && (
          <div className="again-inner">
            <div className="again-image"></div>
            <div className="again-content-wrap">
              <div className="again-title">곰곰 다이어리</div>
              <div className="again-content">
                곰곰이는 00님과
                <br /> 22년 2월 1일부터 23년 1월 31일까지
                <br /> 365일 함께 했어요
              </div>
              <div
                className="step-btn"
                onClick={() =>
                  router.push(`/diary/again/letter?stampType=${stampType}&petName=${petName}`)
                }
              >
                곰곰이와의 추억을 열어보세요 {'>'}
              </div>
            </div>
          </div>
        )}

        {petName === 'dangdang' && (
          <div className="again-inner">
            <div className="again-image again-image2"></div>
            <div className="again-content-wrap">
              <div className="again-title">당당 다이어리</div>
              <div className="again-content">
                당당이는 00님과
                <br /> 22년 2월 1일부터 23년 1월 31일까지
                <br /> 365일 함께 했어요
              </div>
              <div
                className="step-btn"
                onClick={() =>
                  router.push(`/diary/again/letter?stampType=${stampType}&petName=${petName}`)
                }
              >
                당당이와의 추억을 열어보세요 {'>'}
              </div>
            </div>
          </div>
        )}

        {petName === 'bongbong' && (
          <div className="again-inner">
            <div className="again-image again-image3"></div>
            <div className="again-content-wrap">
              <div className="again-title">밀라 다이어리</div>
              <div className="again-content">
                봉봉이는 00님과
                <br /> 22년 2월 1일부터 23년 1월 31일까지
                <br /> 365일 함께 했어요
              </div>
              <div
                className="step-btn"
                onClick={() =>
                  router.push(`/diary/again/letter?stampType=${stampType}&petName=${petName}`)
                }
              >
                봉봉이와의 추억을 열어보세요 {'>'}
              </div>
            </div>
          </div>
        )}
      </Slider>
    </DiarySingleAgainWrapper>
  );
};

export default DiarySingleAgain;
