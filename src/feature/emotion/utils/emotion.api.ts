import makeRequest from '@src/common/function/makeRequest';
import {EmotionType, FeedEmotion, MyEmotion} from './emotion.type';

type getFeedEmotionResponseType = {
  lines: FeedEmotion[];
  totalCount: number;
};

export const addEmotionAPI = async (
  emotion: EmotionType,
  emotionScope: boolean,
  detail?: string,
  detailScope?: boolean,
) => {
  const data = await makeRequest({
    url: '/emotion',
    method: 'post',
    data: {emotion, emotionScope, detail, detailScope},
  });
  return data;
};

export const getFeedEmotions = async (
  start?: number,
): Promise<getFeedEmotionResponseType> => {
  const data: getFeedEmotionResponseType = await makeRequest({
    url: `/emotion/feed?start=${start}`,
    method: 'GET',
  });
  return data;
};

export const getEmotionsAPI = async (date: string) => {
  const data = await makeRequest({
    url: `/emotion/month?yearMonth=${date}`,
  });
  return data.memoList;
};

export const getEmotionDetailAPI = async (emotionId: number) => {
  const {detail} = await makeRequest({url: `/emotion/detail/${emotionId}`});
  return detail;
};

export const getTodayEmotionAPI = async () => {
  try {
    const data: {memoList: MyEmotion[]; totalCount: number} | null =
      await makeRequest({
        url: '/emotion/today',
        method: 'GET',
      });
    return data;
  } catch {
    return null;
  }
};

export const updateTodayEmotionAPI = async (
  memoId: number,
  emotion: EmotionType,
  emotionScope: boolean,
  detailScope: boolean,
  detail?: string,
) => {
  try {
    await makeRequest({
      url: `/emotion/today/${memoId}`,
      method: 'put',
      data: {emotion, emotionScope, detailScope, detail},
    });
    return true;
  } catch (error) {
    return false;
  }
};
