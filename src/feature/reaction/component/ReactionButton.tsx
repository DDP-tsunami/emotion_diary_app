import React from 'react';
import styled from 'styled-components/native';
import {reactionMapper, ReactionType} from '../utils/reaction.type';

interface Props {
  reactionType: ReactionType;
  onClick: () => void;
}

const Container = styled.TouchableOpacity`
  display: flex;
  flex: 1;
`;
const Emoji = styled.Text`
  font-size: 20px;
`;

const ReactionButton = ({reactionType, onClick}: Props) => {
  return (
    <Container onPress={onClick}>
      <Emoji>{reactionMapper[reactionType]}</Emoji>
    </Container>
  );
};

export default ReactionButton;
