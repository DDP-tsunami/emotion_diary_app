import React from 'react';
import styled from 'styled-components/native';

interface Props {
  label: string;
  value: string;
  onChange: (s: string) => void;
  textContentType?: 'name' | 'none' | 'password';
  placeholder?: string;
}

const Container = styled.View`
  width: 60%;
  height: 60px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Label = styled.Text``;
const MyInput = styled.TextInput``;

const LabelInput = ({
  label,
  value,
  textContentType,
  placeholder,
  onChange,
}: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <MyInput
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        textContentType={textContentType}
      />
    </Container>
  );
};

export default LabelInput;
