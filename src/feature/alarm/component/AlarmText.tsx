import React from 'react';
import styled from 'styled-components/native';
import {AlarmType} from '../utils/alarm.type';

interface Props {
  type: AlarmType;
  userName: string;
}
interface StyleProps {
  status: boolean;
}

const Container = styled.Text`
  width: 100%;
  height: 100%;

  flex: 1;
`;

const AlarmText = ({type, userName}: Props) => {
  return (
    <Container>
      {type === AlarmType.friend
        ? `${userName}님이 당신과 친구하고 싶어합니다.`
        : `${userName}님이 당신의 감정에 반응을 보냈습니다.`}
    </Container>
  );
};

export default AlarmText;
