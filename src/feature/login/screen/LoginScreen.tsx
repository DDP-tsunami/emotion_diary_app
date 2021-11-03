import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import BasicButton from '@src/common/component/button/BasicButton';
import LabelInput from '@src/common/component/input/LabelInput';
import {rootStackParams} from '@src/common/utils/common.types';
import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import {loginAPI} from '../utils/login.api';

type Props = NativeStackScreenProps<rootStackParams, 'Login'>;

const Container = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginScreen = ({navigation}: Props) => {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState('');

  const onLogin = async () => {
    try {
      const token = await loginAPI(id, pw);
      if (token === null) {
        throw Error('Login Error');
      }
      AsyncStorage.setItem('token', token);
      navigation.push('Main');
    } catch (error) {}
  };
  const onSignUp = () => {
    navigation.push('SignUp');
  };

  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      console.log(token);
    });
  }, []);

  return (
    <KeyboardAwareScrollView>
      <Container>
        <LabelInput
          label={'id'}
          value={id}
          onChange={setId}
          placeholder={'아이디를 입력해주세요.'}
        />
        <LabelInput
          label={'password'}
          value={pw}
          onChange={setPw}
          placeholder={'비밀번호를 입력해주세요.'}
          textContentType={'password'}
        />
        <BasicButton
          title={'Sigb In'}
          width={'100%'}
          height={'32px'}
          onClick={onLogin}
          disabled={id.length === 0 && pw.length === 0}
        />
        <BasicButton
          title={'Sign Up'}
          width={'100%'}
          height={'32px'}
          onClick={onSignUp}
          disabled={true}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
