import makeRequest from '@src/common/function/makeRequest';
import {Alarm, AlarmType} from './alarm.type';

type AlarmListReturnType = {notices: Alarm[]; totalCount: number};

export const getReactionAlarmListAPI = async (
  start?: number,
): Promise<AlarmListReturnType> => {
  const data: AlarmListReturnType = await makeRequest({
    url: start
      ? `/notice?noticeType=${AlarmType.reaction}&start=${start}`
      : `/notice?noticeType=${AlarmType.reaction}`,
    method: 'GET',
  });
  return data;
};

export const getFriendNoticeListAPI = async (start?: number) => {
  const data: AlarmListReturnType = await makeRequest({
    url: start
      ? `/notice?noticeType=${AlarmType.friendRequest}&start=${start}`
      : `/notice?noticeType=${AlarmType.friendRequest}`,
    method: 'GET',
  });
  return data;
};
