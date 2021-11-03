import axios from 'axios';

const baseURL = 'http://192.168.0.19:8080/api';

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
    console.log('data : ', data.token);
    return data.token;
  } catch (error) {
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
