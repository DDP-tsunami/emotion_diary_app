import CheckBox from '@react-native-community/checkbox';
import {color} from '@src/common/utils/common.style';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  checked: boolean;
  label: string;
  onChange: (c: boolean) => void;
}

const Container = styled.View`
  height: 32px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: center;

  margin-left: 20px;
`;

const Label = styled.Text`
  font-family: 'Pretendard-Black';
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
`;

const BasixCheckBox = ({checked, label, onChange}: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <CheckBox
        value={checked}
        onValueChange={onChange}
        tintColors={{true: color.main, false: color.background}}
      />
    </Container>
  );
};

export default BasixCheckBox;
