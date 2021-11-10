import React from 'react';
import styled from 'styled-components/native';
import ProfilePhoto from '../component/ProfilePhoto';

interface Props {
  nickname: string;
  name: string;
  profilePhotoUrl: string | null;
}

const Container = styled.View`
  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding: 4px 8px;
`;

const Content = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 0 12px;
`;

const Nickname = styled.Text`
  margin-bottom: 4px;

  font-size: 16px;
  font-weight: bold;
`;

const Name = styled.Text`
  font-size: 12px;
  font-weight: normal;
`;

const SmallProfile = ({nickname, name, profilePhotoUrl}: Props) => {
  return (
    <Container>
      <ProfilePhoto photoUrl={profilePhotoUrl} size={32} />
      <Content>
        <Nickname>{nickname}</Nickname>
        <Name>{name}</Name>
      </Content>
    </Container>
  );
};

export default SmallProfile;
