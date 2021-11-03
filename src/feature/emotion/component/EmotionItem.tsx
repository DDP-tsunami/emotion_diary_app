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
  background-color: ${props => (props.isSelected ? '#cdcdcd' : '#fff')};
`;
const Emoji = styled.Text`
  font-size: 16px;
`;

const EmotionItem = ({emoji, isSelected, onClick}: Props) => {
  return (
    <Container onPress={onClick} isSelected={isSelected}>
      <Emoji>{EmojiMapper[emoji]}</Emoji>
    </Container>
  );
};

export default EmotionItem;
