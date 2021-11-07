import makeRequest from '@src/common/function/makeRequest';
import {User} from './profile.type';

export const getProfileData = async (): Promise<User> => {
  const data: User = await makeRequest({url: '/user', method: 'GET'});
  console.log(data);
  return data;
};

export const updateProfileAPI = async (
  nickname: string,
  photoUrl: string | null,
) => {
  try {
    console.log('Photo URL : ', photoUrl);

    await makeRequest({
      url: '/user/profile',
      method: 'put',
      data: {photoUrl, nickname},
    });
  } catch (error) {
    console.log(error);
  }
};
