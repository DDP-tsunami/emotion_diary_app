/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {rootStackParams} from '@src/common/utils/common.types';
import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {color} from '../utils/common.style';

type Props = NativeStackScreenProps<rootStackParams, 'Splash'>;

const Container = styled.View`
  width: 100%;

  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${color.main};
`;

const Text = styled.Text`
  color: #fff;
`;

const SplashScreen = ({navigation}: Props) => {
  const onSplash = () => {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        navigation.push('Main');
      } else {
        navigation.push('Login');
      }
    });
  };
  useEffect(() => {
    setTimeout(onSplash, 3000);
  }, []);

  return (
    <Container>
      <Text>Splash 화면 입니다.</Text>
    </Container>
  );
};

export default SplashScreen;
