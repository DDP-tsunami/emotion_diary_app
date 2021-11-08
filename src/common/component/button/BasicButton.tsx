import {color} from '@src/common/utils/common.style';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
  onClick: () => void;

  disabled?: boolean;
  width?: string;
  height?: string;
  style?: object;
}

interface StyleProps {
  disable?: boolean;
  width?: string;
  height?: string;
}

const Container = styled.TouchableOpacity<StyleProps>`
  width: ${props => (props.width ? props.width : '120px')};
  height: ${props => (props.height ? props.height : '48px')};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 12px;

  border-radius: 12px;
  background-color: ${props => (props.disable ? color.disabled : color.beige)};
`;
const Content = styled.Text`
  font-family: 'Pretendard-Black';
  font-weight: bold;
  color: ${color.black};
`;

const BasicButton = ({
  title,
  width,
  height,
  disabled,
  style,
  onClick,
}: Props) => {
  return (
    <Container
      width={width}
      height={height}
      disable={disabled}
      style={style}
      onPress={onClick}
      disabled={disabled}>
      <Content>{title}</Content>
    </Container>
  );
};

export default BasicButton;
