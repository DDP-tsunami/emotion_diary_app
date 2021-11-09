import React from 'react';
import styled from 'styled-components/native';

import ProfilePhoto from '@src/feature/profile/component/ProfilePhoto';

import {Alarm, AlarmType} from '../utils/alarm.type';
import RequestAlarm from './RequestAlarm';
import FriendAlarm from './FriendAlarm';
import ReactionAlarm from './ReactionAlarm';

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
  justify-content: flex-start;
  align-items: center;

  padding: 0 20px;
  margin-bottom: 8px;

  background-color: ${props => (props.status ? '#e1e1e1' : '#fdfdfd')};
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
      <ProfilePhoto photoUrl={alarm.sender.profilePhotoUrl} size={'40px'} />
      {alarmMapper[alarm.type]}
    </Container>
  );
};

export default AlarmItem;
