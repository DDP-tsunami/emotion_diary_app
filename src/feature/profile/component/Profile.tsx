import Clipboard from '@react-native-clipboard/clipboard';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  name: string;
  photoUrl: string;
  code: string;
  email: string;
};

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ProfilePhoto = styled.Image`
  width: 100px;
  height: 100px;

  margin-bottom: 12px;

  border-radius: 50px;
`;

const Name = styled.Text`
  margin-bottom: 8px;

  font-size: 20px;
  font-weight: bold;
  color: #000;
`;
const Code = styled.Text`
  padding: 2px 4px;

  background-color: #cdcdcd;
  border: none;
  border-radius: 4px;

  font-size: 12px;
  font-weight: normal;
  color: #080808;
`;

const Profile = ({name, photoUrl, code}: Props) => {
  const onCopy = () => {
    Clipboard.setString(code);
  };

  return (
    <Container>
      <ProfilePhoto source={{uri: photoUrl}} />
      <Name>{name}</Name>
      <TouchableOpacity onPress={onCopy}>
        <Code>{`code : ${code}`}</Code>
      </TouchableOpacity>
    </Container>
  );
};

export default Profile;
