import {useIsFocused} from '@react-navigation/core';
import {color} from '@src/common/utils/common.style';
import React from 'react';
import styled from 'styled-components/native';
import FriendAlarmList from '../component/FriendAlarmList';
import ReactionAlarmList from '../component/ReactionAlarmList';

const Container = styled.View`
  width: 100%;
  height: 100%;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0 10%;

  background-color: ${color.white};
`;

const Text = styled.Text`
  width: 100%;

  padding: 0 8px;

  border-bottom-width: 2px;
  border-bottom-color: ${color.black};

  color: ${color.black};
  font-size: 28px;
  line-height: 56px;
`;

const AlarmListScreen = () => {
  const isFocus = useIsFocused();

  return (
    <Container>
      <Text>리액션 알림</Text>
      <ReactionAlarmList isFocus={isFocus} />
      <Text>친구 알림</Text>
      <FriendAlarmList isFocus={isFocus} />
    </Container>
  );
};

export default AlarmListScreen;
