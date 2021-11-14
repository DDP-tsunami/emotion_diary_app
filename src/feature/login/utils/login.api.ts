import {baseURL} from '@src/common/function/makeRequest';
import axios from 'axios';

export const loginAPI = async (
  userId: string,
  password: string,
): Promise<string | null> => {
  try {
    const {data} = await axios.post<{token: string}>(
      `${baseURL}/authentication/login`,
      {
        userId,
        password,
      },
    );
    return data.token;
  } catch (error) {
    console.log('Login Error : ', error);
    return null;
  }
};

export const signUpAPI = async (
  userId: string,
  nickname: string,
  name: string,
  email: string,
  password: string,
) => {
  try {
    await axios.post(`${baseURL}/user/signup`, {
      userId,
      nickname,
      name,
      email,
      password,
    });
  } catch (error) {
    console.log('Sign Up API Error : ', error);
  }
};
