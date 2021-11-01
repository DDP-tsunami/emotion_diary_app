import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import FriendListItem from '../component/FriendListItem';
import {dummyFriendList} from '../data/dummyFriendData';

const Title = styled.Text`
  width: 100%;

  padding: 4px 12px;
  margin-bottom: 8px;

  font-size: 20px;
  font-weight: normal;
`;

const FriendListScreen = () => {
  return (
    <ScrollView>
      <Title>친구 리스트</Title>
      {dummyFriendList.map(user => (
        <FriendListItem key={user.id} friend={user} />
      ))}
    </ScrollView>
  );
};

export default FriendListScreen;
