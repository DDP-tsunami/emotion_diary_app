import {User} from '@src/feature/profile/utils/profile.type';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  sender: User;
}

const Container = styled.Text`
  flex: 1;
`;

const FriendAlarm = ({sender}: Props) => {
  return <Container>{`${sender.name}님과 친구가 되셨습니다.`}</Container>;
};

export default FriendAlarm;
