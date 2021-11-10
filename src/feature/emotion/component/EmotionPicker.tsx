import {color} from '@src/common/utils/common.style';
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
  width: 100%;
  height: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 20px;
  padding: 10px;

  border-top-color: ${color.black};
  border-top-width: 4px;
  border-bottom-color: ${color.background};
  border-bottom-width: 4px;
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
