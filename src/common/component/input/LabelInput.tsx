import React from 'react';
import styled from 'styled-components/native';

interface Props {
  label: string;
  value: string;
  editable?: boolean;
  onChange?: (s: string) => void;
  textContentType?: 'name' | 'none' | 'password';
  placeholder?: string;
}

const Container = styled.View`
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Label = styled.Text`
  min-width: 40px;

  margin-right: 20px;
`;
const MyInput = styled.TextInput``;

const LabelInput = ({
  label,
  value,
  textContentType,
  placeholder,
  editable,
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
        editable={editable}
      />
    </Container>
  );
};

export default LabelInput;
