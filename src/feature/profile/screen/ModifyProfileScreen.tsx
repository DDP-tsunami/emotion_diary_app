import styled from 'styled-components/native';
import BasicButton from '@src/common/component/button/BasicButton';
import LabelInput from '@src/common/component/input/LabelInput';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import ProfilePhoto from '../component/ProfilePhoto';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {rootStackParams} from '@src/common/utils/common.types';
import {getFileFromGallery} from '@src/common/function/getPhoto';
import {firebase} from '@react-native-firebase/storage';
import {updateProfileAPI} from '../utils/profile.api';

type Props = NativeStackScreenProps<rootStackParams, 'Profile'>;

const Container = styled.View``;

const ModifyProfileScreen = ({navigation, route}: Props) => {
  const {profilePhotoUrl, nickname, name} = route.params;

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

  return (
    <Container>
      <TouchableOpacity onPress={onImageUpload}>
        <ProfilePhoto photoUrl={profilePhoto} />
      </TouchableOpacity>
      <LabelInput label={'별명'} value={newNickName} onChange={setNickName} />
      <BasicButton title={'완료'} onClick={onSubmit} />
    </Container>
  );
};

export default ModifyProfileScreen;
