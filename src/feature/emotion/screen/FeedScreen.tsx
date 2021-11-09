/* eslint-disable react-hooks/exhaustive-deps */
import BasicButton from '@src/common/component/button/BasicButton';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import DetailEmotionModal from '../component/DetailEmotionModal';
import FeedEmotionItem from '../component/FeedEmotionItem';
import {getFeedEmotions} from '../utils/emotion.api';
import {FeedEmotion} from '../utils/emotion.type';

const Container = styled.ScrollView`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const FeedScreen = () => {
  const [emotions, setEmotions] = useState<FeedEmotion[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedEmotion, setSelectedEmotion] = useState<FeedEmotion | null>(
    null,
  );

  const getEmotion = async () => {
    const {lines, totalCount: t} = await getFeedEmotions(0);
    setEmotions([...emotions, ...lines]);
    setTotalCount(t);
  };

  useEffect(() => {
    getEmotion();
  }, []);

  const onMoreFeed = async () => {
    const data = await getFeedEmotions(emotions.length);
    console.log(data);
    setEmotions([...emotions, ...data.lines]);
    setTotalCount(data.totalCount);
  };

  return (
    <Container>
      <Text>친구들 감정 모아보기</Text>
      {emotions.map(emotion => (
        <TouchableOpacity
          key={emotion.id}
          onPress={() => {
            setSelectedEmotion(emotion);
            setModalVisible(true);
          }}>
          <FeedEmotionItem emotion={emotion} />
        </TouchableOpacity>
      ))}
      {emotions.length < totalCount ? (
        <BasicButton title={'더 보기'} onClick={onMoreFeed} disabled={false} />
      ) : null}
      <DetailEmotionModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        emotion={selectedEmotion}
      />
    </Container>
  );
};

export default FeedScreen;
