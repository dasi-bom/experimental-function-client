import { useRouter } from 'next/router';
import React from 'react';

// style
import { DiaryCardWrapper } from './styled';

interface IProps {
  item: any;
  removeDiary: (diaryId: number) => void;
}

const DiaryCard = ({ item, removeDiary }: IProps) => {
  const router = useRouter();

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
            <h3 className="title">{item?.title}</h3>
            <div
              className="diary-images"
              style={{ backgroundImage: 'url(../../images/lucky.jpg)' }}
              onClick={() =>
                router.push(
                  `/diary/${router.query.diary_id ? router.query.diary_id : item.diaryId}`
                )
              }
            />

            <p className="content" dangerouslySetInnerHTML={{ __html: item?.content }} />
          </div>
          <div className="bottom-wrap">
            <div className="stamp-wrap">
              <div className="stamp" style={{ backgroundImage: 'url(../../images/stamp1.png)' }} />
            </div>
            <div className="button-wrap">
              <button onClick={() => router.push(`/diary/write/${item.diaryId}`)}>수정</button>
              <span>/</span>
              {/* 각 게시물마다 있는 고유의 diaryId를 이용해서 게시물 삭제 */}
              <button onClick={() => removeDiary(item.diaryId)}>삭제</button>
            </div>
          </div>
        </div>
      </div>
    </DiaryCardWrapper>
  );
};

export default DiaryCard;
