/* eslint-disable react-hooks/exhaustive-deps */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {rootStackParams} from '@src/common/utils/common.types';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

type Props = NativeStackScreenProps<rootStackParams, 'Splash'>;

const SplashScreen = ({navigation}: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.push('Login');
    }, 3000);
  }, []);

  return (
    <View>
      <Text>Splash 화면 입니다.</Text>
    </View>
  );
};

export default SplashScreen;
