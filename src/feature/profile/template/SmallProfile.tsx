import {color} from '@src/common/utils/common.style';
import React from 'react';
import styled from 'styled-components/native';
import ProfilePhoto from '../component/ProfilePhoto';

interface Props {
  nickname: string;
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
  color: ${color.black};
  font-family: 'Pretendard-Light';
  font-size: 16px;
  line-height: 18px;
`;

const SmallProfile = ({nickname, profilePhotoUrl}: Props) => {
  return (
    <Container>
      <ProfilePhoto photoUrl={profilePhotoUrl} size={32} />
      <Content>
        <Nickname>{nickname}</Nickname>
      </Content>
    </Container>
  );
};

export default SmallProfile;
