import {color} from '@src/common/utils/common.style';
import SmallProfile from '@src/feature/profile/template/SmallProfile';
import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {reactionMapper, ReactionType} from '../utils/reaction.type';

interface Props {
  name: string;
  nickname: string;
  photoUrl: string;
  reaction: ReactionType;
}

const Container = styled.View`
  width: 80%;
  height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-self: center;

  margin-bottom: 8px;
  padding: 8px;

  border: 1px solid ${color.black};
`;

const ReactionItem = ({photoUrl, name, nickname, reaction}: Props) => {
  return (
    <Container>
      <SmallProfile
        profilePhotoUrl={photoUrl}
        name={name}
        nickname={nickname}
      />
      <Text>{reactionMapper[reaction]}</Text>
    </Container>
  );
};

export default ReactionItem;
