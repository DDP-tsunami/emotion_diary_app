import {color} from '@src/common/utils/common.style';
import React from 'react';
import styled from 'styled-components/native';
import ProfilePhoto from '../component/ProfilePhoto';

type Props = {
  name: string;
  email: string;
  photoUrl?: string | null;
  disabled?: boolean;
  onClick?: () => void;
};

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;

  background-color: transparent;

  margin-bottom: 12px;
`;

const Name = styled.Text`
  margin-bottom: 4px;

  font-family: 'Pretendard-Light';
  font-size: 20px;
  color: ${color.black};
`;
const Code = styled.Text`
  padding: 4px 8px 6px 8px;

  background-color: ${color.background};
  border: none;
  border-radius: 4px;

  text-align: center;

  font-size: 12px;
  font-family: 'Pretendard-Light';
  font-weight: normal;
  color: ${color.black};
`;
const Content = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;

  margin-left: 16px;
`;

const Profile = ({name, photoUrl, email, onClick, disabled}: Props) => {
  return (
    <Container onPress={onClick} disabled={disabled}>
      <ProfilePhoto photoUrl={photoUrl} size={80} />
      <Content>
        <Name>{name}</Name>
        <Code>{email}</Code>
      </Content>
    </Container>
  );
};

export default Profile;
