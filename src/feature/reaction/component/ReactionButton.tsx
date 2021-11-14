import React from 'react';
import styled from 'styled-components/native';
import {reactionMapper, ReactionType} from '../utils/reaction.type';

interface Props {
  isSelected: boolean;
  reactionType: ReactionType;
  onClick: () => void;
}

interface ImageProps {
  isSelected: boolean;
}

const Container = styled.TouchableOpacity<ImageProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 1px;

  background-color: ${props => (props.isSelected ? '#cdcdcd' : '#fff')};
  border-radius: 4px;
`;
const Emoji = styled.Image`
  width: 20px;
  height: 20px;

  resize-mode: contain;
`;

const ReactionButton = ({reactionType, isSelected, onClick}: Props) => {
  return (
    <Container onPress={onClick} isSelected={isSelected}>
      <Emoji source={reactionMapper[reactionType]} />
    </Container>
  );
};

export default ReactionButton;
