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
`;

const AlarmListScreen = () => {
  return (
    <Container>
      <ReactionAlarmList />
      <FriendAlarmList />
    </Container>
  );
};

export default AlarmListScreen;
