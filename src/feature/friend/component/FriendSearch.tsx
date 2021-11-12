import {User} from '@src/feature/profile/utils/profile.type';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {requestFriendAPI, searchFriendEmail} from '../utils/friend.api';
import FriendListItem from './FriendListItem';

const Container = styled.View``;
const Input = styled.TextInput``;
const List = styled.View``;

const FriendSearch = () => {
  const [searchId, setSearchId] = useState<string>('');
  const [searchedFriends, setSearchedFriends] = useState<User[]>([]);

  const onSearch = async (text: string) => {
    setSearchId(text);
    const result = await searchFriendEmail(text);
    if (result) {
      setSearchedFriends([...result]);
    } else {
      setSearchedFriends([]);
    }
  };

  const onFriendRequest = async (id: string) => {
    setSearchedFriends(searchedFriends.filter(friend => friend.id !== id));
    requestFriendAPI(id);
  };

  return (
    <Container>
      <Input
        value={searchId}
        onChangeText={onSearch}
        placeholder={'친구의 아이디를 검색해주세요.'}
      />
      <List>
        {searchedFriends.map(friend => (
          <FriendListItem
            key={friend.id}
            friend={friend}
            buttonText={'요청'}
            onClick={() => onFriendRequest(friend.id)}
          />
        ))}
      </List>
    </Container>
  );
};

export default FriendSearch;
