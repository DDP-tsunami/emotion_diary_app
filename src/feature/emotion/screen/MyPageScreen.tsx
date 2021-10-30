import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {tabViewParams} from '@src/feature/tabView/utils/tabview.type';
import React from 'react';
import {Text, View} from 'react-native';

type Props = NativeStackScreenProps<tabViewParams, 'MyPage'>;

const MyPageScreen = ({}: Props) => {
  return (
    <View>
      <Text>마이 페이지 입니다.</Text>
    </View>
  );
};

export default MyPageScreen;
