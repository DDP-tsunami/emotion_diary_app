import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosRequestConfig} from 'axios';

export const baseURL = 'http://172.30.1.40:8080/api';
export default async function makeRequest(config: AxiosRequestConfig) {
  try {
    const token = await AsyncStorage.getItem('token');
    const requestConfiguration: AxiosRequestConfig = {
      ...config,
      baseURL,
      headers: {Authorization: `Bearer ${token}`},
    };
    const {data} = await axios(requestConfiguration);
    return data;
  } catch (error) {
    console.log(error);
  }
}
