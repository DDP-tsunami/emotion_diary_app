import makeRequest from '@src/common/function/makeRequest';
import {Alarm} from './alarm.type';

type AlarmListReturnType = {notices: Alarm[]; totalCount: number};

export const getAlarmListAPI = async (
  start?: number,
): Promise<AlarmListReturnType> => {
  const data: AlarmListReturnType = await makeRequest({
    url: start ? `/notice?start=${start}` : '/notice',
    method: 'GET',
  });
  return data;
};
