/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {rootStackParams} from '@src/common/utils/common.types';
import BasicButton from '@src/common/component/button/BasicButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  checkEmailDuplicationAPI,
  checkIdDuplicationAPI,
  signUpAPI,
} from '../utils/login.api';
import {color} from '@src/common/utils/common.style';
import LoginInput from '@src/common/component/input/LoginInput';
import Logo from '@src/common/component/Logo';
import LoginInputWithError from '@src/common/component/input/LoginInputWithError';

type Props = NativeStackScreenProps<rootStackParams, 'SignUp'>;

const Wrapper = styled(KeyboardAwareScrollView)`
  width: 100%;

  flex: 1;
  display: flex;
  flex-direction: column;

  background-color: ${color.main};
`;

const Container = styled.View`
  width: 100%;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 30% 0px;
`;

const InputSection = styled.View`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 32px;
`;

const NameSection = styled.View`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SignUpScreen = ({navigation}: Props) => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');

  const [idExistence, setIdExistence] = useState<boolean>(false);
  const [emailExistence, setEmailExistence] = useState<boolean>(false);

  const onSignUp = async () => {
    if (pw === pwCheck) {
      await signUpAPI(id, nickname, name, email, pw);
    }
    navigation.push('Login');
  };

  const onGetIdExistence = async () => {
    const result = await checkIdDuplicationAPI(id);
    setIdExistence(result);
  };

  const onGetEmailExistence = async () => {
    const result = await checkEmailDuplicationAPI(email);
    setEmailExistence(result);
  };
  useEffect(() => {
    onGetIdExistence();
  }, [id]);
  useEffect(() => {
    onGetEmailExistence();
  }, [email]);

  return (
    <Wrapper>
      <Container>
        <Logo size={'80px'} />
        <InputSection>
          <LoginInputWithError
            value={id}
            onChange={setId}
            placeholder={'아이디'}
            error={idExistence}
            errorMessage={'중복된 아이디입니다.'}
          />
          <LoginInputWithError
            value={email}
            onChange={setEmail}
            placeholder={'이메일'}
            error={emailExistence}
            errorMessage={'중복된 이메일입니다.'}
          />
          <NameSection>
            <LoginInput
              value={name}
              onChange={setName}
              placeholder={'이름'}
              width={'40%'}
            />
            <LoginInput
              value={nickname}
              onChange={setNickname}
              placeholder={'닉네임'}
              width={'50%'}
            />
          </NameSection>
          <LoginInput value={pw} onChange={setPw} placeholder={'비밀번호'} />
          <LoginInput
            placeholder={'비밀번호 확인'}
            value={pwCheck}
            onChange={setPwCheck}
          />
        </InputSection>
        <BasicButton
          title={'회원가입'}
          width={'60%'}
          height={'44px'}
          disabled={
            id.length === 0 ||
            nickname.length === 0 ||
            name.length === 0 ||
            email.length === 0 ||
            pw !== pwCheck ||
            idExistence ||
            emailExistence
          }
          onClick={onSignUp}
        />
      </Container>
    </Wrapper>
  );
};

export default SignUpScreen;
