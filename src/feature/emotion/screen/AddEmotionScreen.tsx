import {NativeStackScreenProps} from '@react-navigation/native-stack';
import BasicButton from '@src/common/component/button/BasicButton';
import BasixCheckBox from '@src/common/component/checkbox/BasicCheckBox';
import {rootStackParams} from '@src/common/utils/common.types';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import EmotionPicker from '../component/EmotionPicker';
import {addEmotionAPI} from '../utils/emotion.api';
import {EmotionType} from '../utils/emotion.type';

type Props = NativeStackScreenProps<rootStackParams, 'Main'>;

const Container = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.TextInput`
  width: 80%;
  background-color: #fcfcfc;

  margin-bottom: 20px;

  border-radius: 16px;
`;

const AddEmotionScreen = ({navigation}: Props) => {
  const [emotion, setEmotion] = useState<EmotionType | null>(null);
  const [emotionScope, setEmotionScope] = useState<boolean>(false);
  const [detail, setDetail] = useState<string>('');
  const [detailScope, setDetailScope] = useState<boolean>(false);

  const onClick = async () => {
    if (emotion) {
      const result = await addEmotionAPI(
        emotion,
        emotionScope,
        detail,
        detailScope,
      );
      if (result) {
        navigation.push('Main');
      }
    }
  };

  return (
    <Container>
      <EmotionPicker emotion={emotion} onEmotionClick={setEmotion} />
      <BasixCheckBox
        checked={emotionScope}
        onChange={checked => {
          setEmotionScope(checked);
        }}
        label={'감정 공개설정'}
      />
      <Input value={detail} onChangeText={setDetail} numberOfLines={10} />
      <BasixCheckBox
        checked={detailScope}
        onChange={checked => {
          setDetailScope(checked);
        }}
        label={'일기 공개설정'}
      />
      <BasicButton title={'감정 추가하기'} onClick={onClick} disabled={true} />
    </Container>
  );
};

export default AddEmotionScreen;
