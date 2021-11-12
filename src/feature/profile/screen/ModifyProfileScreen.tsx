import styled from 'styled-components/native';
import LabelInput from '@src/common/component/input/LabelInput';
import React, {useState} from 'react';
import ProfilePhoto from '../component/ProfilePhoto';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {rootStackParams} from '@src/common/utils/common.types';
import {getFileFromGallery} from '@src/common/function/getPhoto';
import {firebase} from '@react-native-firebase/storage';
import {updateProfileAPI} from '../utils/profile.api';
import VioletButton from '@src/common/component/button/VioletButton';
import {color} from '@src/common/utils/common.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LabelItem from '@src/common/component/item/LabelItem';
import BasicButton from '@src/common/component/button/BasicButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = NativeStackScreenProps<rootStackParams, 'Profile'>;

const Wrapper = styled(KeyboardAwareScrollView)`
  width: 100%;

  flex: 1;
  display: flex;
  flex-direction: column;

  background-color: ${color.white};
`;
const Container = styled.View`
  width: 100%;
  height: 100%;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: ${color.white};
`;
const Header = styled.View`
  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  padding: 28px 16px;
`;

const ImageSection = styled.View`
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;

  background-color: ${color.violet};
`;

const ImageModifyButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-weight: bold;
`;

const InputSection = styled.View`
  width: 100%;
  height: 260px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 30%;
  margin-bottom: 20px;

  border: 1px solid ${color.black};
`;

const ModifyProfileScreen = ({navigation, route}: Props) => {
  const {profilePhotoUrl, nickname, name, email} = route.params;

  const [profilePhoto, setProfilePhoto] = useState<string | null>(
    profilePhotoUrl,
  );
  const [newNickName, setNickName] = useState<string>(nickname);

  const onImageUpload = async () => {
    try {
      const file = await getFileFromGallery();
      if (file) {
        const {uri} = file;
        if (uri) {
          setProfilePhoto(uri);
          const imgRef = firebase.storage().ref(`profile_photo/${name}`);
          const task = imgRef.putFile(uri);

          task.on(firebase.storage.TaskEvent.STATE_CHANGED, async snapshot => {
            if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
              const url = await imgRef.getDownloadURL();
              setProfilePhoto(url);
            }
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = async () => {
    await updateProfileAPI(newNickName, profilePhoto);
    navigation.push('Main');
  };
  const onLogOut = async () => {
    await AsyncStorage.removeItem('token');
    navigation.push('Login');
  };

  return (
    <Wrapper>
      <Container>
        <Header>
          <VioletButton
            title={'완료'}
            onClick={onSubmit}
            width={'60px'}
            height={'36px'}
          />
        </Header>
        <ImageSection>
          <ProfilePhoto photoUrl={profilePhoto} />
          <ImageModifyButton onPress={onImageUpload}>
            <Text>프로필 사진 변경</Text>
          </ImageModifyButton>
        </ImageSection>
        <InputSection>
          <LabelInput label={'이름'} value={name} editable={false} />
          <LabelItem label={'이메일'} value={email} />
          <LabelInput
            label={'닉네임'}
            value={newNickName}
            onChange={setNickName}
          />
        </InputSection>
        <BasicButton title={'로그아웃'} onClick={onLogOut} />
      </Container>
    </Wrapper>
  );
};

export default ModifyProfileScreen;
