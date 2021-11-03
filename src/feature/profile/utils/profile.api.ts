import makeRequest from '@src/common/function/makeRequest';
import {User} from './profile.type';

export const getProfileData = async (): Promise<User> => {
  const data: User = await makeRequest({url: '/user', method: 'GET'});
  console.log(data);
  return data;
};
