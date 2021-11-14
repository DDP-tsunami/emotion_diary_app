/* eslint-disable react-hooks/exhaustive-deps */
import {useIsFocused} from '@react-navigation/core';
import BasicButton from '@src/common/component/button/BasicButton';
import {color} from '@src/common/utils/common.style';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import DetailEmotionModal from '../component/DetailEmotionModal';
import FeedEmotionItem from '../component/FeedEmotionItem';
import {getFeedEmotions} from '../utils/emotion.api';
import {FeedEmotion} from '../utils/emotion.type';

const Container = styled.ScrollView`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 16px;

  background-color: ${color.white};
`;
const Text = styled.Text`
  width: 100%;
  height: 48px;

  padding: 8px;

  border-bottom-width: 2px;
  border-bottom-color: ${color.black};

  color: ${color.black};
  font-family: 'Pretendard-Light';
  font-size: 24px;
`;

const FeedScreen = () => {
  const isFocused = useIsFocused();

  const [emotions, setEmotions] = useState<FeedEmotion[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedEmotion, setSelectedEmotion] = useState<FeedEmotion | null>(
    null,
  );

  const getEmotion = async () => {
    const {lines, totalCount: t} = await getFeedEmotions(0);
    setEmotions([...lines]);
    setTotalCount(t);
  };

  useEffect(() => {
    getEmotion();
  }, [isFocused]);

  const onMoreFeed = async () => {
    const data = await getFeedEmotions(emotions.length);
    setEmotions([...emotions, ...data.lines]);
    setTotalCount(data.totalCount);
  };
  const onEmotionClick = (emotion: FeedEmotion) => {
    setSelectedEmotion(emotion);
    setModalVisible(true);
  };

  return (
    <Container>
      <Text>Today's Weather</Text>
      {emotions.map(emotion => (
        <FeedEmotionItem
          key={emotion.id}
          emotion={emotion}
          onClick={() => {
            onEmotionClick(emotion);
          }}
        />
      ))}
      {emotions.length < totalCount && (
        <BasicButton title={'더 보기'} onClick={onMoreFeed} disabled={false} />
      )}
      <DetailEmotionModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        emotion={selectedEmotion}
      />
    </Container>
  );
};

export default FeedScreen;
