import {color} from '@src/common/utils/common.style';
import SmallProfile from '@src/feature/profile/template/SmallProfile';
import React from 'react';
import styled from 'styled-components/native';
import {reactionMapper, ReactionType} from '../utils/reaction.type';

interface Props {
  nickname: string;
  photoUrl: string;
  reaction: ReactionType;
}

const Container = styled.View`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-self: center;

  margin-bottom: 8px;
  padding: 8px;

  border: 1px solid ${color.gray};
  border-radius: 8px;
`;

const Emoji = styled.Image`
  width: 30px;
  height: 30px;

  resize-mode: contain;
`;

const ReactionItem = ({photoUrl, nickname, reaction}: Props) => {
  return (
    <Container>
      <SmallProfile profilePhotoUrl={photoUrl} nickname={nickname} />
      <Emoji source={reactionMapper[reaction]} />
    </Container>
  );
};

export default ReactionItem;
