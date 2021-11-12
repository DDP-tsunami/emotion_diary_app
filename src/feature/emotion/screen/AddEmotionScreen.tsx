import {useIsFocused} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import BlackButton from '@src/common/component/button/BlackButton';
import BasixCheckBox from '@src/common/component/checkbox/BasicCheckBox';
import {color} from '@src/common/utils/common.style';
import {rootStackParams} from '@src/common/utils/common.types';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import EmotionPicker from '../component/EmotionPicker';
import {
  addEmotionAPI,
  getTodayEmotionAPI,
  updateTodayEmotionAPI,
} from '../utils/emotion.api';
import {EmotionType, MyEmotion} from '../utils/emotion.type';

type Props = NativeStackScreenProps<rootStackParams, 'Main'>;

const Container = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 0 10%;

  background-color: ${color.white};
`;

const Header = styled.View`
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Title = styled.Text`
  width: 100%;

  font-family: 'Pretendard-Black';
  font-size: 32px;
  font-weight: bold;

  margin-bottom: 16px;
`;

const Input = styled.TextInput`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin-bottom: 4px;
  padding: 4px 8px;

  background-color: ${color.white};

  border-top-color: ${color.black};
  border-top-width: 4px;
  border-bottom-color: ${color.background};
  border-bottom-width: 4px;
`;

const CheckBoxSection = styled.View`
  width: 100%;
  height: 48px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 8px;

  border-top-color: ${color.background};
  border-top-width: 4px;
`;

const Label = styled.Text`
  font-size: 20px;
  line-height: 24px;
  font-weight: 900;
  font-family: 'Pretendard-Black';
`;

const AddEmotionScreen = ({navigation}: Props) => {
  const isFocused = useIsFocused();

  const [currentEmotion, setCurrentEmotion] = useState<MyEmotion | null>(null);
  const [emotion, setEmotion] = useState<EmotionType | null>(null);
  const [emotionScope, setEmotionScope] = useState<boolean>(false);
  const [detail, setDetail] = useState<string>('');
  const [detailScope, setDetailScope] = useState<boolean>(false);

  const onSubmit = async () => {
    if (emotion) {
      if (currentEmotion) {
        const result = await updateTodayEmotionAPI(
          currentEmotion.id,
          emotion,
          emotionScope,
          detailScope,
          detail,
        );
        if (result) {
          navigation.push('Main');
        }
      } else {
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
    }
  };
  const getTodayEmotion = async () => {
    const result = await getTodayEmotionAPI();

    if (result?.memoList.length) {
      const {
        emotion: currentEmotionType,
        emotionScope: currentEmotionScope,
        detailScope: currentDetailScope,
        detail: currentDetail,
      } = result.memoList[0];
      setCurrentEmotion(result.memoList[0]);
      setEmotion(currentEmotionType);
      setEmotionScope(currentEmotionScope);
      setDetailScope(currentDetailScope);
      currentDetail && setDetail(currentDetail);
    } else {
      setCurrentEmotion(null);
    }
  };

  useEffect(() => {
    getTodayEmotion();
  }, [isFocused]);

  return (
    <Container>
      <Header>
        <BlackButton
          onClick={onSubmit}
          title={'등록'}
          width={'50px'}
          height={'30px'}
          disabled={emotion === null}
        />
      </Header>
      <Title>{'오늘의\n감정날씨는\n어땠나요?'}</Title>
      <EmotionPicker emotion={emotion} onEmotionClick={setEmotion} />
      <Title>코멘트</Title>
      <Input value={detail} onChangeText={setDetail} numberOfLines={8} />
      <CheckBoxSection>
        <Label>공개 설정</Label>
        <BasixCheckBox
          checked={emotionScope}
          onChange={checked => {
            setEmotionScope(checked);
          }}
          label={'감정 공개'}
        />
        <BasixCheckBox
          checked={detailScope}
          onChange={checked => {
            setDetailScope(checked);
          }}
          label={'일기 공개'}
        />
      </CheckBoxSection>
    </Container>
  );
};

export default AddEmotionScreen;
