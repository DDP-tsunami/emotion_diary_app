import React from 'react';
import styled from 'styled-components/native';

import ProfilePhoto from '@src/feature/profile/component/ProfilePhoto';

import {Alarm, AlarmType} from '../utils/alarm.type';
import RequestAlarm from './RequestAlarm';
import FriendAlarm from './FriendAlarm';
import ReactionAlarm from './ReactionAlarm';
import {color} from '@src/common/utils/common.style';

interface Props {
  alarm: Alarm;
  onDelete?: () => void;
}
interface StyleProps {
  status: boolean;
}

const Container = styled.View<StyleProps>`
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding: 0 20px;
  margin-bottom: 8px;

  background-color: ${color.white};
  border-bottom-width: 2px;
  border-bottom-color: ${color.violet};
`;

const AlarmItem = ({alarm, onDelete}: Props) => {
  const alarmMapper = {
    [AlarmType.friendRequest]: (
      <RequestAlarm
        sender={alarm.sender}
        noticeId={alarm.id}
        onDelete={onDelete}
      />
    ),
    [AlarmType.friendResponse]: <FriendAlarm sender={alarm.sender} />,
    [AlarmType.reaction]: <ReactionAlarm sender={alarm.sender} />,
  };

  return (
    <Container status={alarm.status}>
      <ProfilePhoto photoUrl={alarm.sender.profilePhotoUrl} size={40} />
      {alarmMapper[alarm.type]}
    </Container>
  );
};

export default AlarmItem;
