import makeRequest from '@src/common/function/makeRequest';
import {User} from './profile.type';

export const getProfileDataAPI = async (): Promise<User> => {
  const data: User = await makeRequest({url: '/user', method: 'GET'});
  return data;
};

export const updateProfileAPI = async (
  nickname: string,
  photoUrl: string | null,
) => {
  try {
    await makeRequest({
      url: '/user/profile',
      method: 'put',
      data: {photoUrl, nickname},
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfoAPI = async (): Promise<boolean> => {
  try {
    const result = await makeRequest({url: '/user', method: 'get'});
    if (result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
