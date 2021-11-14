import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import FriendListItem from '../component/FriendListItem';
import FriendSearch from '../component/FriendSearch';
import {deleteFriendAPI, getFriendList} from '../utils/friend.api';

import {color} from '@src/common/utils/common.style';
import {User} from '@src/feature/profile/utils/profile.type';
import {useIsFocused} from '@react-navigation/core';

const Container = styled.ScrollView`
  background-color: ${color.white};

  padding: 5% 5% 0 5%;
`;

const Title = styled.Text`
  width: 100%;
  height: 48px;

  padding: 8px 12px;
  margin-bottom: 8px;

  border-bottom-width: 1px;
  border-bottom-color: ${color.black};

  color: ${color.black};
  font-family: 'Pretendard-Light';
  font-size: 24px;
`;

const FriendListScreen = () => {
  const isFocused = useIsFocused();
  const [friends, setFriends] = useState<User[]>([]);

  useEffect(() => {
    getFriendList().then(data => {
      setFriends(data.friends);
    });
  }, [isFocused]);

  const onDelete = (id: string) => {
    deleteFriendAPI(id);
    setFriends(friends.filter(friend => friend.id !== id));
  };

  return (
    <Container>
      <FriendSearch />
      <Title>팔로우 리스트</Title>
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
