import {User} from '@src/feature/profile/utils/profile.type';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import FriendListItem from '../component/FriendListItem';
import FriendSearch from '../component/FriendSearch';
import {getFriendList} from '../utils/friend.api';

const Title = styled.Text`
  width: 100%;

  padding: 4px 12px;
  margin-bottom: 8px;

  font-size: 20px;
  font-weight: normal;
`;

const FriendListScreen = () => {
  const [friends, setFriends] = useState<User[]>([]);

  useEffect(() => {
    getFriendList().then(data => {
      setFriends(data.friends);
    });
  }, []);

  return (
    <ScrollView>
      <FriendSearch />
      <Title>친구 리스트</Title>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} buttonText={'삭제'} />
      ))}
    </ScrollView>
  );
};

export default FriendListScreen;
