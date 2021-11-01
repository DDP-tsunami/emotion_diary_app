import React from 'react';
import styled from 'styled-components/native';

import {User} from '@src/feature/profile/utils/profile.type';
import ProfilePhoto from '@src/feature/profile/component/ProfilePhoto';

interface Props {
  friend: User;
}

const Container = styled.View`
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0px 20px;
`;

const Profile = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Name = styled.Text`
  height: 100%;
  margin-left: 12px;

  font-size: 20px;
  text-align: center;
`;

const Button = styled.Button`
  width: 40px;
  height: 40px;

  flex: 1;

  background-color: #cfcfcf;
`;

const FriendListItem = ({friend}: Props) => {
  return (
    <Container>
      <Profile>
        <ProfilePhoto photoUrl={friend.profilePhoto} size={'40px'} />
        <Name>{friend.name}</Name>
      </Profile>
      <Button title={'삭제'} />
    </Container>
  );
};

export default FriendListItem;
