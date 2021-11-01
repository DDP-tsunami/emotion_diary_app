import {User} from '@src/feature/profile/utils/profile.type';

export enum AlarmType {
  friend = 'friend',
  reaction = 'reaction',
}

export type Alarm = {
  id: string;
  type: AlarmType;
  sender: User;
  status: boolean;
  date: Date;
};
