import { useRouter } from 'next/router';
import React, { useState } from 'react';

// style
import { DiaryCardWrapper } from './styled';

interface IProps {
  item: any;
}

const DiaryCard = ({ item }: IProps) => {
  const router = useRouter();
  const [active, setActive] = useState<boolean>(false);

  const stampHandler = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  // // 수정 handle
  // const handleEditMode = (e: any) => {
  //   setActive(!active);
  // };

  // // 삭제 handle
  // const handleDelete = () => {
  //     axios.delete(`/api/admin/hero?id=${props.match.params.id}`)
  //       .then((response: { data: any; }) => {
  //         console.log(response.data);
  //         props.history.push('/heroes/hero'); // this.props.router.push('/heroes/hero'); 3.0.0+
  //       });
  // };

  return (
    <DiaryCardWrapper>
      <div className="card-wrap">
        <div className="date">
          <span>{item?.createdAt}</span>
        </div>
        <div className="content-wrap">
          <div className="content-inner">
            <h3 className="title">
              {/* {`#${item?.petName}`} */}
              {item?.title}
            </h3>
            <div className="diary-images" onClick={() => router.push(`/diary/${item.petId}`)} />

            <p className="content" dangerouslySetInnerHTML={{ __html: item?.content }} />
          </div>
          <div className="bottom-wrap">
            <div
              className={active ? 'active stamp-wrap' : 'stamp-wrap'}
              // onClick={stampHandler}
            >
              <div className="stamp" />
            </div>
            <div className="button-wrap">
              <button onClick={() => router.push('../DiaryWriteUpdate.tsx')}>수정</button>
              <span>/</span>
              <button onClick={() => {}}>삭제</button>
            </div>
          </div>
        </div>
      </div>
    </DiaryCardWrapper>
  );
};

export default DiaryCard;
