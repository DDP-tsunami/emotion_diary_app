import BasicButton from '@src/common/component/button/BasicButton';
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
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

  useEffect(() => {
    getFeedEmotions(0).then(({memoList: e, totalCount: t}) => {
      console.log('Total Count : ', t);
      console.log('Emotions : ', e);
      setEmotions([...e]);
      setTotalCount(t);
    });
  }, []);

  const onMoreFeed = async () => {
    const data = await getFeedEmotions(emotions.length);
    console.log(data);
    setEmotions([...emotions, ...data.memoList]);
    setTotalCount(data.totalCount);
  };

  return (
    <Container>
      <Text>친구들 감정 모아보기</Text>
      {emotions.map(emotion => (
        <FeedEmotionItem key={emotion.id} emotion={emotion} />
      ))}
      {emotions.length < totalCount ? (
        <BasicButton title={'더 보기'} onClick={onMoreFeed} disabled={false} />
      ) : null}
    </Container>
  );
};

export default FeedScreen;
