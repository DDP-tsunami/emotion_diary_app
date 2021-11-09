/* eslint-disable react-hooks/exhaustive-deps */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {rootStackParams} from '@src/common/utils/common.types';
import {getUserInfoAPI} from '@src/feature/profile/utils/profile.api';
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
  const onSplash = async () => {
    const result = await getProfileDataAPI();
    if (result) {
      navigation.push('Main');
    } else {
      navigation.push('Login');
    }
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
