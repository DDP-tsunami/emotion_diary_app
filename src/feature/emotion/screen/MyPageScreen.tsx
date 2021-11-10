import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import BasicButton from '@src/common/component/button/BasicButton';
import {rootStackParams} from '@src/common/utils/common.types';
import {User} from '@src/feature/profile/utils/profile.type';
import {getProfileDataAPI} from '@src/feature/profile/utils/profile.api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from '@src/feature/profile/template/Profile';
import EmotionCalendar from '../component/EmotionCalendar';
import {color} from '@src/common/utils/common.style';
import BackGroundImage from '../component/BackGroundImage';

type Props = NativeStackScreenProps<rootStackParams, 'Main'>;

const Container = styled.ScrollView`
  flex: 1;

  background-color: ${color.white};
`;

const Content = styled.View`
  width: 100%;

  padding: 5% 10%;

  background-color: transparent;
`;

const MyPageScreen = ({navigation}: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const getProfile = async () => {
    const profile = await getProfileDataAPI();
    setUser(profile);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const onUpdate = () => {
    if (user) {
      navigation.push('Profile', user);
    }
  };
  const onLogOut = async () => {
    await AsyncStorage.removeItem('token');
    navigation.push('Login');
  };

  return user ? (
    <Container>
      <BackGroundImage />
      <Content>
        <Profile
          name={user.nickname}
          email={user.email}
          photoUrl={user?.profilePhotoUrl}
          onClick={onUpdate}
        />
        <BasicButton title={'로그아웃'} onClick={onLogOut} />
        <EmotionCalendar />
      </Content>
    </Container>
  ) : null;
};

export default MyPageScreen;
