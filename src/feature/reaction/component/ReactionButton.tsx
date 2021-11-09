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
  flex: 1;

  background-color: ${props => (props.isSelected ? '#cdcdcd' : '#fff')};
`;
const Emoji = styled.Text`
  font-size: 20px;
`;

const ReactionButton = ({reactionType, isSelected, onClick}: Props) => {
  return (
    <Container onPress={onClick} isSelected={isSelected}>
      <Emoji>{reactionMapper[reactionType]}</Emoji>
    </Container>
  );
};

export default ReactionButton;
