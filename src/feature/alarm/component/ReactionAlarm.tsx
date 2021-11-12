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

const ReactionAlarm = ({sender}: Props) => {
  return (
    <Container>{`${sender.name}님이\n게시물에 감정을 남겼습니다.`}</Container>
  );
};

export default ReactionAlarm;
