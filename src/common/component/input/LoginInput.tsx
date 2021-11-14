import {color} from '@src/common/utils/common.style';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  width?: string;
}

interface ImageProps {
  width?: string;
}

const Input = styled.TextInput<ImageProps>`
  width: ${props => (props.width ? props.width : '60%')};

  border-bottom-color: ${color.black};
  border-bottom-width: 2px;

  color: ${color.black};
  font-family: 'Pretendard-Light';
  font-size: 20px;

  margin-bottom: 12px;
`;

const LoginInput = ({value, onChange, placeholder, width}: Props) => {
  return (
    <Input
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor={color.black}
      width={width}
    />
  );
};

export default LoginInput;
