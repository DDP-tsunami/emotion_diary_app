import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import BasicButton from '@src/common/component/button/BasicButton';
import LoginInput from '@src/common/component/input/LoginInput';
import Logo from '@src/common/component/Logo';
import {color} from '@src/common/utils/common.style';
import {rootStackParams} from '@src/common/utils/common.types';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {loginAPI} from '../utils/login.api';

type Props = NativeStackScreenProps<rootStackParams, 'Login'>;

const Container = styled.View`
  width: 100%;
  height: 100%;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${color.main};
`;
const InputSection = styled.View`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 32px;
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
    } catch (error) {
      console.log(error);
    }
  };
  const onSignUp = () => {
    navigation.push('SignUp');
  };

  return (
    <Container>
      <Logo size={'80px'} />
      <InputSection>
        <LoginInput value={id} onChange={setId} placeholder={'아이디'} />
        <LoginInput value={pw} onChange={setPw} placeholder={'비밀번호'} />
      </InputSection>
      <BasicButton
        title={'로그인'}
        width={'60%'}
        height={'44px'}
        onClick={onLogin}
        disabled={id.length === 0 || pw.length === 0}
      />
      <BasicButton
        title={'회원가입'}
        width={'60%'}
        height={'44px'}
        onClick={onSignUp}
      />
    </Container>
  );
};

export default LoginScreen;
