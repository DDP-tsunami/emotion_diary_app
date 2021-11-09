import React from 'react';
import styled from 'styled-components/native';
import ReactionButton from '../component/ReactionButton';
import {addReactionAPI} from '../utils/reaction.api';
import {ReactionType, reactionTypeArray} from '../utils/reaction.type';

interface Props {
  memoId: number;
  memberId: number;
}

const Container = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ReactionButtonSection = ({memoId, memberId}: Props) => {
  const onReactionClick = async (reactionType: ReactionType) => {
    await addReactionAPI(memoId, memberId, reactionType);
  };
  return (
    <Container>
      {reactionTypeArray.map((reactionType: ReactionType) => (
        <ReactionButton
          key={reactionType}
          reactionType={reactionType}
          onClick={() => onReactionClick(reactionType)}
        />
      ))}
    </Container>
  );
};

export default ReactionButtonSection;
