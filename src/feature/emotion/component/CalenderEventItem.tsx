import React from 'react';
import styled from 'styled-components/native';
import {EmojiMapper, EmotionType} from '../utils/emotion.type';

interface Props {
  emotion: EmotionType;
}

const Container = styled.View`
  height: 100%;

  flex: 1;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
`;
const Emoji = styled.Text`
  height: 24px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 20px;
`;

const CalenderEventItem = ({emotion}: Props) => {
  return (
    <Container>
      <Emoji>{EmojiMapper[emotion]}</Emoji>
    </Container>
  );
};

export default CalenderEventItem;
