import Clipboard from '@react-native-clipboard/clipboard';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import ProfilePhoto from './ProfilePhoto';

type Props = {
  name: string;
  code: string;
  email: string;
  photoUrl?: string | null;
};

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Name = styled.Text`
  margin-bottom: 8px;

  font-size: 20px;
  font-weight: bold;
  color: #000;
`;
const Code = styled.Text`
  padding: 4px 8px 6px 8px;

  background-color: #cdcdcd;
  border: none;
  border-radius: 4px;

  text-align: center;

  font-size: 12px;
  font-weight: normal;
  color: #080808;
`;
const Profile = ({name, photoUrl, email}: Props) => {
  const onCopy = () => {
    Clipboard.setString(email);
  };

  return (
    <Container>
      <ProfilePhoto photoUrl={photoUrl} />
      <Name>{name}</Name>
      <TouchableOpacity onPress={onCopy}>
        <Code>{email}</Code>
      </TouchableOpacity>
    </Container>
  );
};

export default Profile;
