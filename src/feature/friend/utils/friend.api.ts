import makeRequest from '@src/common/function/makeRequest';
import {User} from '@src/feature/profile/utils/profile.type';

export const getFriendList = async () => {
  try {
    const result: {friends: User[]} = await makeRequest({
      url: '/friend',
      method: 'GET',
    });
    return result;
  } catch (error) {
    console.log(error);
    return {friends: []};
  }
};

export const getFriendsRequestList = async () => {
  try {
    const result = await makeRequest({url: '/friend/request', method: 'get'});
    return result;
  } catch (error) {
    console.log(error);
    return {friends: []};
  }
};

export const deleteFriends = async (friendId: string) => {
  try {
    await makeRequest({
      url: `/friend/${friendId}`,
      method: 'delete',
    });
  } catch (error) {}
};

export const requestFriendAPI = async (friendId: string) => {
  await makeRequest({
    url: '/friend/request',
    method: 'post',
    data: {receiveId: friendId, type: 'friend'},
  });
};

export const searchFriendEmail = async (email: string): Promise<User[]> => {
  const data: {memberInfoList: User[]} = await makeRequest({
    url: `/user/search?email=${email}`,
  });
  console.log('data : ', data);
  return data.memberInfoList;
};
