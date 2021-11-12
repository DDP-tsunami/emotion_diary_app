import React from 'react';
import styled from 'styled-components/native';
import {EmotionType} from '../utils/emotion.type';
import EmotionItem from './EmotionItem';

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
const CalenderEventItem = ({emotion}: Props) => {
  return (
    <Container>
      <EmotionItem emoji={emotion} size={'24px'} />
    </Container>
  );
};

export default CalenderEventItem;
