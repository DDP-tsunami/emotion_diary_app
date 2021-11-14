/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import ReactionItem from '../component/ReactionItem';
import {getReactionListAPI} from '../utils/reaction.api';
import {ReactionType} from '../utils/reaction.type';

interface Props {
  memoId: number;
}

const Container = styled.ScrollView`
  width: 100%;
  height: 120px;

  display: flex;
  flex-direction: column;
`;

const ReactionList = ({memoId}: Props) => {
  const [reactionList, setReactionList] = useState<
    {
      id: string;
      name: string;
      nickname: string;
      photoUrl: string;
      reaction: ReactionType;
    }[]
  >([]);
  const getReactionList = async () => {
    const result = await getReactionListAPI(memoId);
    setReactionList(result);
  };

  useEffect(() => {
    getReactionList();
  }, []);

  return (
    <Container>
      <Text>반응들</Text>
      {reactionList.map(({id, nickname, photoUrl, reaction}) => (
        <ReactionItem
          key={id}
          nickname={nickname}
          photoUrl={photoUrl}
          reaction={reaction}
        />
      ))}
    </Container>
  );
};

export default ReactionList;
