import React from 'react';
import styled from 'styled-components/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {tabViewParams} from '@src/feature/tabView/utils/tabview.type';
import Profile from '@src/feature/profile/component/Profile';

type Props = NativeStackScreenProps<tabViewParams, 'MyPage'>;

const Container = styled.View`
  padding: 20px 0;
`;

const MyPageScreen = ({}: Props) => {
  return (
    <Container>
      <Profile
        name={'이준희'}
        code={'123456'}
        email={'qht6@naver.com'}
        photoUrl={
          'https://firebasestorage.googleapis.com/v0/b/emotion-diary-7b533.appspot.com/o/profile_photo%2FIMG_5846.JPG?alt=media&token=f4db2996-342d-46cf-ae1c-f560dbf31005'
        }
      />
    </Container>
  );
};

export default MyPageScreen;
