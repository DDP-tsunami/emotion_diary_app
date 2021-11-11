import makeRequest from '@src/common/function/makeRequest';
import {ReactionType} from './reaction.type';

export const getReactionListAPI = async (memoId: number) => {
  const result = await makeRequest({url: `/reaction/${memoId}`, method: 'get'});
  return result.reactions;
};

export const getReactionAPI = async (memoId: number) => {
  const result: {
    reaction: ReactionType;
    reactionId: number;
    status: boolean | null;
  } | null = await makeRequest({
    url: `/reaction/myReaction/${memoId}`,
    method: 'GET',
  });
  return result;
};

export const addReactionAPI = async (
  memoId: number,
  reaction: ReactionType,
  receiveId: number,
) => {
  await makeRequest({
    url: '/reaction',
    method: 'post',
    data: {memoId, reaction, receiveId},
  });
};

export const updateReactionAPI = async (
  reactionId: number,
  reaction: ReactionType,
  receiveId: number,
) => {
  await makeRequest({
    url: '/reaction',
    method: 'put',
    data: {reaction, reactionId, receiveId},
  });
};

export const deleteReactionAPI = async (
  reactionId: number,
  reaction: ReactionType,
  receiveId: number,
) => {
  await makeRequest({
    url: `/reaction/${reactionId}`,
    method: 'delete',
    data: {reactionId, reaction, receiveId},
  });
};
