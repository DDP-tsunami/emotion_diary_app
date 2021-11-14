import React from 'react';
import styled from 'styled-components/native';

import {User} from '@src/feature/profile/utils/profile.type';
import ProfilePhoto from '@src/feature/profile/component/ProfilePhoto';
import BlackButton from '@src/common/component/button/BlackButton';
import {color} from '@src/common/utils/common.style';

interface Props {
  friend: User;
  buttonText: string;
  onClick: () => void;
}

const Container = styled.View`
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0px 20px;

  border-bottom-width: 1.5px;
  border-bottom-color: ${color.gray};
`;

const Profile = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Name = styled.Text`
  height: 100%;
  margin-left: 16px;

  color: ${color.black};
  font-family: 'Pretendard-Light';
  font-size: 20px;
  line-height: 26px;
  text-align: center;
`;

const FriendListItem = ({friend, buttonText, onClick}: Props) => {
  return (
    <Container>
      <Profile>
        <ProfilePhoto photoUrl={friend.profilePhotoUrl} size={40} />
        <Name>{friend.name}</Name>
      </Profile>
      <BlackButton
        title={buttonText}
        onClick={onClick}
        width={'48px'}
        height={'32px'}
      />
    </Container>
  );
};

export default FriendListItem;
