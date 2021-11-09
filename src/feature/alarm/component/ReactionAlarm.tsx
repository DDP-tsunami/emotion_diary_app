import {User} from '@src/feature/profile/utils/profile.type';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  sender: User;
}

const Container = styled.Text`
  flex: 1;
`;

const ReactionAlarm = ({sender}: Props) => {
  return <Container>{`${sender.name}님이 당신에게 공감했습니다`}</Container>;
};

export default ReactionAlarm;
