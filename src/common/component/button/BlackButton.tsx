import {color} from '@src/common/utils/common.style';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
  onClick: () => void;
  width?: string;
  height?: string;
  disabled?: boolean;
}

interface ImageProps {
  width?: string;
  height?: string;
  isDisabled?: boolean;
}

const Container = styled.TouchableOpacity<ImageProps>`
  width: ${({width}) => (width ? width : '20px')};
  height: ${({height}) => (height ? height : '20px')};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${color.black};

  border-radius: 4px;
`;

const Text = styled.Text<ImageProps>`
  font-family: 'Pretendard-Black';
  font-size: 12px;
  color: ${({isDisabled}) => (isDisabled ? color.disabled : color.white)};
`;

const BlackButton = ({title, onClick, width, height, disabled}: Props) => {
  return (
    <Container
      onPress={onClick}
      width={width}
      height={height}
      disabled={disabled}>
      <Text isDisabled={disabled}>{title}</Text>
    </Container>
  );
};

export default BlackButton;
