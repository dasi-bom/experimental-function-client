import initAxios from './defaultClient';

const prefix = '/diary';

// 일기 작성
export interface ICreateDiary {
  requestDto: {
    pet: { petName: string };
    title: string;
    content: string;
    stamps: [{ stampType: string }];
  };
  multipartFile: any;
}

// 일기 작성
export const createDiary = async (args: any) => {
  const axios = initAxios();
  return await axios.post('/diary/save/text', {
    pet: args.pet,
    title: args.title,
    content: args.content,
    stamps: args.stamps,
  });
};

// 이미지 업로드
export const uploadFile = async (args: any) => {
  const axios = initAxios();
  return await axios.post(`${prefix}/save/file`, args, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

// 일기 수정
interface IUpdateDiary {
  diaryId: number;
  title?: string;
  content?: string;
}

export const updateDiary = async (args: IUpdateDiary) => {
  const axios = initAxios();
  return await axios.patch(`${prefix}/${args.diaryId}`, {
    title: args.title,
    content: args.content,
  });
};

// 일기 상세 조회
interface IDiaryId {
  diaryId: number;
}

export const getDiarySingle = async (args: IDiaryId) => {
  const axios = initAxios();
  return await axios.get(`${prefix}/detail/${args.diaryId}`, {});
};

// 일기 리스트 조회
interface IGetDiaryList {
  cursor?: number;
  petId?: number;
}

export const getDiaryList = async (args: IGetDiaryList) => {
  const axios = initAxios();
  return await axios.get(`${prefix}/list`, {
    params: {
      cursor: args.cursor,
      petId: args.petId,
    },
  });
};

// 일기 삭제
export const deleteDiary = async (args: IDiaryId) => {
  const axios = initAxios();
  return await axios.delete(`${prefix}/${args.diaryId}`, {});
};

// 다시 보기
interface IGetAgainDiary {
  petId: number;
  stampType: 'WALK' | 'TREAT' | 'TOY';
}

export const getAgainDiary = async (args: IGetAgainDiary) => {
  const axios = initAxios();
  return await axios.get(`${prefix}/again`, {
    params: {
      petId: args.petId,
      stampType: args.stampType,
    },
  });
};

// 공유하기
