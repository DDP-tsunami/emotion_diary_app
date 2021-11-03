import makeRequest from '@src/common/function/makeRequest';
import {EmotionType} from './emotion.type';

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
