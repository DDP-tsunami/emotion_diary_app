import React from 'react';
import styled from 'styled-components/native';
import {EmojiMapper, FeedEmotion} from '../utils/emotion.type';

interface Props {
  emotion: FeedEmotion;
}

const Container = styled.View`
  width: 80%;
  height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 8px 12px;
  margin-bottom: 4px;
`;

const Emoji = styled.Text``;

const FeedEmotionItem = ({emotion}: Props) => {
  return (
    <Container>
      <SmallProfile user={emotion.user} />
      <Emoji>{EmojiMapper[emotion.emotion]}</Emoji>
    </Container>
  );
};

export default FeedEmotionItem;
