import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosRequestConfig} from 'axios';
export const baseURL = 'http://192.168.0.19:8080/api';

export const makeRequest = async (config: AxiosRequestConfig) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const requestConfiguration: AxiosRequestConfig = {
      ...config,
      headers: {Authorization: `Barer ${token}`},
    };
    const {data} = await axios(requestConfiguration);
    return data;
  } catch (error) {}
};
