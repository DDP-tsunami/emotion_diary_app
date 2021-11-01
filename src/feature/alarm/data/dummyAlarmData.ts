import {Alarm, AlarmType} from '../utils/alarm.type';

export const dummyAlarmIdList: string[] = ['1', '2', '3'];
export const dummyAlarmEntites: {[id: string]: Alarm} = {
  '1': {
    id: '1',
    type: AlarmType.reaction,
    sender: {
      id: '2',
      name: '황동욱',
      profilePhoto:
        'https://firebasestorage.googleapis.com/v0/b/emotion-diary-7b533.appspot.com/o/profile_photo%2F%EC%9C%88%ED%84%B0.jpg?alt=media&token=be40f3fa-703f-41c4-8742-73af4c643f98',
      code: '000001',
    },
    status: true,
    date: new Date(),
  },
  '2': {
    id: '2',
    type: AlarmType.friend,
    sender: {
      id: '2',
      name: '이기원',
      profilePhoto:
        'https://firebasestorage.googleapis.com/v0/b/emotion-diary-7b533.appspot.com/o/profile_photo%2F%EB%B7%94.jfif?alt=media&token=6000b06d-f43b-4f17-aad7-1d2f2445abdc',
      code: '000002',
    },
    status: false,
    date: new Date(),
  },
  '3': {
    id: '3',
    type: AlarmType.reaction,
    sender: {
      id: '2',
      name: '정은주',
      profilePhoto:
        'https://firebasestorage.googleapis.com/v0/b/emotion-diary-7b533.appspot.com/o/profile_photo%2F%EC%9C%A1%EC%9E%98%EB%98%90.jpg?alt=media&token=57baf554-7c40-4adc-b51f-9d0caef87311',
      code: '000003',
    },
    status: false,
    date: new Date(),
  },
};
