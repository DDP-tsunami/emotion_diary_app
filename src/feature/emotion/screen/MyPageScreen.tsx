import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Profile from '@src/feature/profile/component/Profile';
import BasicButton from '@src/common/component/button/BasicButton';
import {rootStackParams} from '@src/common/utils/common.types';
import {User} from '@src/feature/profile/utils/profile.type';
import {getProfileData} from '@src/feature/profile/utils/profile.api';

type Props = NativeStackScreenProps<rootStackParams, 'Main'>;

const Container = styled.View`
  padding: 20px 0;
`;

const MyPageScreen = ({navigation}: Props) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    getProfileData().then(profile => {
      setUser(profile);
    });
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
      />
      <BasicButton
        title={'프로필 수정하기'}
        onClick={onUpdate}
        disabled={false}
      />
    </Container>
  ) : null;
};

export default MyPageScreen;
