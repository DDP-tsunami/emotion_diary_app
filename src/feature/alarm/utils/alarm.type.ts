import {User} from '@src/feature/profile/utils/profile.type';

export enum AlarmType {
  friendRequest = 'FRIEND_REQUEST',
  friendResponse = 'FRIEND_RESPONSE',
  reaction = 'REACTION',
}

export type Alarm = {
  id: string;
  type: AlarmType;
  sender: User;
  status: boolean;
  date: Date;
};
