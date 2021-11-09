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
  height: 30%;

  display: flex;
  flex-direction: column; ;
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
    console.log(result);
    setReactionList(result);
  };

  useEffect(() => {
    getReactionList();
  }, []);

  return (
    <Container>
      <Text>반응들</Text>
      {reactionList.map(({id, name, nickname, photoUrl, reaction}) => (
        <ReactionItem
          key={id}
          name={name}
          nickname={nickname}
          photoUrl={photoUrl}
          reaction={reaction}
        />
      ))}
    </Container>
  );
};

export default ReactionList;
