import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {tabViewParams} from '@src/feature/tabView/utils/tabview.type';
import Profile from '@src/feature/profile/component/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = NativeStackScreenProps<tabViewParams, 'MyPage'>;

const Container = styled.View`
  padding: 20px 0;
`;

const MyPageScreen = ({}: Props) => {
  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      console.log(token);
    });
  }, []);
  return (
    <Container>
      <Profile
        name={'이준희'}
        code={'123456'}
        email={'qht6@naver.com'}
        photoUrl={
          'https://firebasestorage.googleapis.com/v0/b/emotion-diary-7b533.appspot.com/o/profile_photo%2F%EC%B8%84.jpg?alt=media&token=e3e08c51-0a23-4999-96fe-bb45bc641bcd'
        }
      />
    </Container>
  );
};

export default MyPageScreen;
