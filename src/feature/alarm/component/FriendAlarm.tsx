import {User} from '@src/feature/profile/utils/profile.type';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  sender: User;
}

const Container = styled.Text`
  flex: 1;

  margin-left: 12px;

  font-family: Pretendard;
  font-size: 16px;
`;

const FriendAlarm = ({sender}: Props) => {
  return <Container>{`${sender.name}님과\n친구가 되셨습니다.`}</Container>;
};

export default FriendAlarm;
