import React from 'react';
import styled from 'styled-components/native';
import {EmojiMapper, EmotionType} from '../utils/emotion.type';

interface Props {
  emotion: EmotionType;
}

const Container = styled.View`
  flex: 1;
`;
const Emoji = styled.Text`
  font-size: 20;
`;

const CalenderEventItem = ({emotion}: Props) => {
  return (
    <Container>
      <Emoji>{EmojiMapper[emotion]}</Emoji>
    </Container>
  );
};

export default CalenderEventItem;
