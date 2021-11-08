import SmallProfile from '@src/feature/profile/template/SmallProfile';
import React from 'react';
import styled from 'styled-components/native';
import {EmojiMapper, FeedEmotion} from '../utils/emotion.type';

interface Props {
  emotion: FeedEmotion;
}

const Container = styled.View`
  width: 80%;
  height: 120px;

  align-self: center;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 8px 12px;
  margin-bottom: 4px;

  border: 1px solid #000;
`;

const Emoji = styled.Text`
  display: flex;
  flex-direction: row;
  align-self: center;

  font-size: 40px;
`;

const FeedEmotionItem = ({emotion}: Props) => {
  return (
    <Container>
      <SmallProfile
        name={emotion.name}
        nickname={emotion.nickname}
        profilePhotoUrl={emotion.profilePhotoUrl}
      />
      <Emoji>{EmojiMapper[emotion.emotion]}</Emoji>
    </Container>
  );
};

export default FeedEmotionItem;
