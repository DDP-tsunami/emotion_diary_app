import React from 'react';
import styled from 'styled-components/native';
import {EmojiMapper, EmotionType} from '../utils/emotion.type';

interface Props {
  emoji: EmotionType;
  isSelected?: boolean;
  onClick?: () => void;
  size?: string;
}
interface ImageProps {
  isSelected?: boolean;
  size?: string;
}

const Container = styled.TouchableOpacity<ImageProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 8px;

  background-color: ${props => (props.isSelected ? '#cdcdcd' : '#fff')};

  border-radius: 20px;
`;
const Emoji = styled.Image<ImageProps>`
  width: ${({size}) => (size ? size : '50px')};
  height: ${({size}) => (size ? size : '50px')};

  align-self: center;
  resize-mode: contain;
`;

const TouchableEmotionItem = ({emoji, isSelected, onClick, size}: Props) => {
  return (
    <Container onPress={onClick} isSelected={isSelected}>
      <Emoji source={EmojiMapper[emoji]} size={size} />
    </Container>
  );
};

export default TouchableEmotionItem;
