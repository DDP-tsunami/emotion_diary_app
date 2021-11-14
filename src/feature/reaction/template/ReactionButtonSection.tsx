/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import ReactionButton from '../component/ReactionButton';
import {
  addReactionAPI,
  deleteReactionAPI,
  getReactionAPI,
  updateReactionAPI,
} from '../utils/reaction.api';
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

  padding: 8px 4px;
`;

const ReactionButtonSection = ({memoId, memberId}: Props) => {
  const [currentReaction, setCurrentReaction] = useState<{
    reaction: ReactionType;
    reactionId: number;
    status: boolean | null;
  } | null | null>(null);

  const getMyReaction = async () => {
    const result = await getReactionAPI(memoId);
    if (result && result.reaction) {
      setCurrentReaction(result);
    }
  };
  const onReactionClick = async (reactionType: ReactionType) => {
    if (currentReaction) {
      if (currentReaction.reaction === reactionType) {
        deleteReactionAPI(currentReaction.reactionId, reactionType, memberId);
        setCurrentReaction(null);
      } else {
        updateReactionAPI(currentReaction.reactionId, reactionType, memberId);
        setCurrentReaction({
          ...currentReaction,
          status: true,
          reaction: reactionType,
        });
      }
    } else {
      await addReactionAPI(memoId, reactionType, memberId);
      await getMyReaction();
    }
  };

  useEffect(() => {
    getMyReaction();
  }, []);

  return (
    <Container>
      {reactionTypeArray.map((reactionType: ReactionType) => (
        <ReactionButton
          key={reactionType}
          reactionType={reactionType}
          isSelected={currentReaction?.reaction === reactionType}
          onClick={() => onReactionClick(reactionType)}
        />
      ))}
    </Container>
  );
};

export default ReactionButtonSection;
