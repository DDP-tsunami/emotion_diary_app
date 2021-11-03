import React from 'react';
import styled from 'styled-components/native';
import {EmotionType} from '../utils/emotion.type';
import EmotionItem from './EmotionItem';

interface Props {
  emotion: EmotionType | null;
  onEmotionClick: (e: EmotionType) => void;
}

const EmotionArray = [
  EmotionType.SUN,
  EmotionType.CLOUD,
  EmotionType.RAIN,
  EmotionType.THUNDER,
];

const Container = styled.View`
  width: 80%;
  height: 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 20px;
`;

const EmotionPicker = ({emotion, onEmotionClick}: Props) => {
  return (
    <Container>
      {EmotionArray.map(emo => (
        <EmotionItem
          key={emo}
          isSelected={emotion === emo}
          emoji={emo}
          onClick={() => {
            onEmotionClick(emo);
          }}
        />
      ))}
    </Container>
  );
};

export default EmotionPicker;
