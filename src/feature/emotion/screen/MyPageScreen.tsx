import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Profile from '@src/feature/profile/template/Profile';
import BasicButton from '@src/common/component/button/BasicButton';
import {rootStackParams} from '@src/common/utils/common.types';
import {User} from '@src/feature/profile/utils/profile.type';
import {getProfileData} from '@src/feature/profile/utils/profile.api';
import EmotionCalendar from '../component/EmotionCalendar';

type Props = NativeStackScreenProps<rootStackParams, 'Main'>;

const Container = styled.View`
  padding: 20px 0;
`;

const MyPageScreen = ({navigation}: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const getProfile = async () => {
    const profile = await getProfileData();
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
  return user ? (
    <Container>
      <Profile
        name={user.nickname}
        code={user.email}
        email={'qht6@naver.com'}
        photoUrl={user?.profilePhotoUrl}
      />
      <BasicButton
        title={'프로필 수정하기'}
        onClick={onUpdate}
        disabled={false}
      />
      <EmotionCalendar />
    </Container>
  ) : null;
};

export default MyPageScreen;
