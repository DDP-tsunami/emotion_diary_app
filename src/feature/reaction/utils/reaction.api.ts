import makeRequest from '@src/common/function/makeRequest';
import {ReactionType} from './reaction.type';

export const addReactionAPI = async (
  memoId: number,
  receiveId: number,
  reactionType: ReactionType,
) => {
  await makeRequest({
    url: '/reaction',
    method: 'post',
    data: {memoId, receiveId, reaction: reactionType, type: 'reaction'},
  });
};
