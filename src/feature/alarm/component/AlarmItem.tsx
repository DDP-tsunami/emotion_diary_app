import React from 'react';
import styled from 'styled-components/native';

import ProfilePhoto from '@src/feature/profile/component/ProfilePhoto';

import {Alarm} from '../utils/alarm.type';
import AlarmText from './AlarmText';

interface Props {
  alarm: Alarm;
}
interface StyleProps {
  status: boolean;
}

const Container = styled.View<StyleProps>`
  width: 100%;
  height: 120px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding: 0 20px;
  margin-bottom: 8px;

  background-color: ${props => (props.status ? '#e1e1e1' : '#fdfdfd')};
`;

const AlarmItem = ({alarm}: Props) => {
  return (
    <Container status={alarm.status}>
      <ProfilePhoto photoUrl={alarm.sender.profilePhotoUrl} size={'80px'} />
      <AlarmText type={alarm.type} userName={alarm.sender.name} />
    </Container>
  );
};

export default AlarmItem;
