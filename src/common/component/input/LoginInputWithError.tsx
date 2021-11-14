import {color} from '@src/common/utils/common.style';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  value: string;
  onChange: (text: string) => void;
  error: boolean;
  errorMessage: string;
  placeholder?: string;
  width?: string;
}

interface ImageProps {
  width?: string;
}

const Container = styled.View`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const Input = styled.TextInput<ImageProps>`
  width: ${props => (props.width ? props.width : '60%')};

  border-bottom-color: ${color.black};
  border-bottom-width: 2px;

  color: ${color.black};
  font-family: 'Pretendard-Light';
  font-size: 20px;
`;
const Error = styled.Text`
  font-size: 10px;

  margin-top: 4px;

  color: ${color.red};
`;

const LoginInputWithError = ({
  value,
  error,
  errorMessage,
  onChange,
  placeholder,
  width,
}: Props) => {
  return (
    <Container>
      <Input
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={color.black}
        width={width}
      />
      <Error>{error && errorMessage}</Error>
    </Container>
  );
};

export default LoginInputWithError;
