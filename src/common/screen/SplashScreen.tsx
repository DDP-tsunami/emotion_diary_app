/* eslint-disable react-hooks/exhaustive-deps */
import {useIsFocused} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {rootStackParams} from '@src/common/utils/common.types';
import {getUserInfoAPI} from '@src/feature/profile/utils/profile.api';
import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {color} from '../utils/common.style';

type Props = NativeStackScreenProps<rootStackParams, 'Splash'>;

const Logo = require('@res/image/logo_brown.png');

const Container = styled.View`
  width: 100%;

  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${color.main};
`;

const Text = styled.Text`
  color: ${color.black};
  font-family: 'Pretendard-Light';
  font-size: 32px;
  font-weight: 100;
`;
const Image = styled.Image`
  width: 40px;
  height: 40px;

  margin-bottom: 20px;

  resize-mode: contain;
`;

const SplashScreen = ({navigation}: Props) => {
  const isFocused = useIsFocused();
  const onSplash = async () => {
    const result = await getUserInfoAPI();
    if (result) {
      navigation.push('Main');
    } else {
      navigation.push('Login');
    }
  };
  useEffect(() => {
    if (isFocused) {
      setTimeout(onSplash, 3000);
    }
  }, [isFocused]);

  return (
    <Container>
      <Image source={Logo} />
      <Text>{'오\n늘\n일\n기'}</Text>
    </Container>
  );
};

export default SplashScreen;
