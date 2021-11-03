import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
  onClick: () => void;

  disabled: boolean;
  width?: string;
  height?: string;
  style?: object;
}

interface StyleProps {
  disable: boolean;
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
`;
const Content = styled.Text``;

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
      onPress={onClick}>
      <Content>{title}</Content>
    </Container>
  );
};

export default BasicButton;
