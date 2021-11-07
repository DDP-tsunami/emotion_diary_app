import makeRequest from '@src/common/function/makeRequest';
import {EmotionType, FeedEmotion} from './emotion.type';

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
  console.log('Get Feed Emotion : ', data);
  return data;
};

export const getEmotionDetailAPI = async (emotionId: number) => {
  const {detail} = await makeRequest({url: `/emotion/detail/${emotionId}`});
  return detail;
};
