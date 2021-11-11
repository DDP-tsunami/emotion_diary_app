import {color} from '@src/common/utils/common.style';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  label: string;
  value: string;
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
const Item = styled.Text`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 4px 8px;

  border-radius: 4px;

  background-color: ${color.gray};

  line-height: 22px;
`;

const LabelItem = ({label, value}: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Item>{value}</Item>
    </Container>
  );
};

export default LabelItem;
