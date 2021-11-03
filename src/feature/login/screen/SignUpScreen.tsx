import React, {useState} from 'react';
import styled from 'styled-components/native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {rootStackParams} from '@src/common/utils/common.types';
import LabelInput from '@src/common/component/input/LabelInput';
import BasicButton from '@src/common/component/button/BasicButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {signUpAPI} from '../utils/login.api';

type Props = NativeStackScreenProps<rootStackParams, 'SignUp'>;

const Container = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 20px;
`;

const SignUpScreen = ({navigation}: Props) => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');

  const onSignUp = async () => {
    if (pw === pwCheck) {
      await signUpAPI(id, nickname, name, email, pw);
    }
    navigation.push('Login');
  };

  return (
    <KeyboardAwareScrollView>
      <Container>
        <LabelInput label={'아이디'} value={id} onChange={setId} />
        <LabelInput label={'이메일'} value={email} onChange={setEmail} />
        <LabelInput label={'이름'} value={name} onChange={setName} />
        <LabelInput label={'닉네임'} value={nickname} onChange={setNickname} />
        <LabelInput label={'비밀번호'} value={pw} onChange={setPw} />
        <LabelInput
          label={'비밀번호 확인'}
          value={pwCheck}
          onChange={setPwCheck}
        />
        <BasicButton
          title={'회원가입'}
          width={'100%'}
          height={'32px'}
          disabled={true}
          onClick={onSignUp}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;
