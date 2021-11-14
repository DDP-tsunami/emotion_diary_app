import {color} from '@src/common/utils/common.style';
import SmallProfile from '@src/feature/profile/template/SmallProfile';
import ReactionButtonSection from '@src/feature/reaction/template/ReactionButtonSection';
import React from 'react';
import styled from 'styled-components/native';
import {FeedEmotion} from '../utils/emotion.type';
import TouchableEmotionItem from './TouchableEmotionItem';

interface Props {
  emotion: FeedEmotion;
  onClick: () => void;
}

const Container = styled.View`
  width: 95%;

  align-self: center;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-top: 20px;

  border: 1px solid ${color.gray};
  border-radius: 8px;
`;

const ProfileSection = styled.View`
  width: 100%;

  padding: 8px 4px;
`;

const EmotionSection = styled.View`
  width: 100%;

  padding: 8px;

  border-bottom-width: 1px;
  border-bottom-color: ${color.gray};
  border-top-width: 1px;
  border-top-color: ${color.gray};
`;

const FeedEmotionItem = ({emotion, onClick}: Props) => {
  return (
    <Container>
      <ProfileSection>
        <SmallProfile
          nickname={emotion.nickname}
          profilePhotoUrl={emotion.profilePhotoUrl}
        />
      </ProfileSection>
      <EmotionSection>
        <TouchableEmotionItem
          emoji={emotion.emotion}
          size={'100px'}
          onClick={onClick}
        />
      </EmotionSection>
      <ReactionButtonSection memoId={emotion.id} memberId={emotion.memberId} />
    </Container>
  );
};

export default FeedEmotionItem;
