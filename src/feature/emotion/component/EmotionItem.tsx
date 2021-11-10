import React from 'react';
import styled from 'styled-components/native';
import {EmojiMapper, EmotionType} from '../utils/emotion.type';

interface Props {
  emoji: EmotionType;
  isSelected: boolean;
  onClick: () => void;
}
interface ImageProps {
  isSelected: boolean;
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
const Emoji = styled.Text`
  align-self: center;

  font-size: 50px;
  text-align: center;
`;

const EmotionItem = ({emoji, isSelected, onClick}: Props) => {
  return (
    <Container onPress={onClick} isSelected={isSelected}>
      <Emoji>{EmojiMapper[emoji]}</Emoji>
    </Container>
  );
};

export default EmotionItem;
