import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import FriendListItem from '../component/FriendListItem';
import FriendSearch from '../component/FriendSearch';
import {deleteFriendAPI, getFriendList} from '../utils/friend.api';

import {color} from '@src/common/utils/common.style';
import {User} from '@src/feature/profile/utils/profile.type';

const Container = styled.ScrollView`
  background-color: ${color.white};
`;

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

  const onDelete = (id: string) => {
    deleteFriendAPI(id);
    setFriends(friends.filter(friend => friend.id !== id));
  };

  return (
    <Container>
      <FriendSearch />
      <Title>친구 리스트</Title>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          friend={friend}
          buttonText={'삭제'}
          onClick={() => {
            onDelete(friend.id);
          }}
        />
      ))}
    </Container>
  );
};

export default FriendListScreen;
