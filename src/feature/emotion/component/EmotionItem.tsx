import React from 'react';
import styled from 'styled-components/native';
import {EmojiMapper, EmotionType} from '../utils/emotion.type';

interface Props {
  emoji: EmotionType;
  size?: string;
}
interface ImageProps {
  isSelected?: boolean;
  size?: string;
}

const Container = styled.View<ImageProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 8px;

  background-color: transparent;

  border-radius: 20px;
`;
const Emoji = styled.Image<ImageProps>`
  width: ${({size}) => (size ? size : '50px')};
  height: ${({size}) => (size ? size : '50px')};

  align-self: center;
  resize-mode: contain;
`;

const EmotionItem = ({emoji, size}: Props) => {
  return (
    <Container>
      <Emoji source={EmojiMapper[emoji]} size={size} />
    </Container>
  );
};

export default EmotionItem;
