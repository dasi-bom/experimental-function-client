import React, { useState } from 'react';

// style
import { DiaryCardWrapper } from './styled';

const DiaryCard = () => {
  const [active, setActive] = useState<boolean>(false);

  const stampHandler = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  // 수정 handle
  const handleEditMode = (e: any) => {
    setActive(!active);
  };

  // 삭제 handle
  const handleDelete = () => {
      api.delete(`/api/admin/hero?id=${props.match.params.id}`)
        .then((response: { data: any; }) => {
          console.log(response.data);
          props.history.push('/heroes/hero'); // this.props.router.push('/heroes/hero'); 3.0.0+
        });
  };

  return (
    <DiaryCardWrapper>
      <div className="card-wrap">
        <div className="date">
          <span>23.01.30 18:00</span>
        </div>
        <div className="content-wrap">
          <div className="content-inner">
            <h3 className="title">단추처럼 생긴 코</h3>
            <div className="diary-images" />
            <p className="content">우리 곰곰이는 털도 매력이지만 코가 귀엽다</p>
          </div>
          <div className="bottom-wrap">
            <div
              className={active ? 'active stamp-wrap' : 'stamp-wrap'}
              // onClick={stampHandler}
            >
              <div className="stamp" />
            </div>
            <div className="button-wrap">
              <button onClick={handleEditMode}>수정</button>
              <span>/</span>
              <button onClick={handleDelete}>삭제</button>
            </div>
          </div>
        </div>
      </div>
    </DiaryCardWrapper>
  );
};

export default DiaryCard;
