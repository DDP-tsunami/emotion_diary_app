import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  checked: boolean;
  label: string;
  onChange: (c: boolean) => void;
}

const Container = styled.View`
  width: 100%;
  height: 20px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 12px;
`;

const Label = styled.Text`
  font-size: 16px;
`;

const BasixCheckBox = ({checked, label, onChange}: Props) => {
  return (
    <Container>
      <CheckBox value={checked} onValueChange={onChange} />
      <Label>{label}</Label>
    </Container>
  );
};

export default BasixCheckBox;
