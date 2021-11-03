import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LabelInput from '@src/common/component/input/LabelInput';
import {rootStackParams} from '@src/common/utils/common.types';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import ProfilePhoto from '../component/ProfilePhoto';

type Props = NativeStackScreenProps<rootStackParams, 'Profile'>;

const Container = styled.View``;

const ModifyProfileScreen = ({navigation, route}: Props) => {
  const {profilePhotoUrl, nickname} = route.params;

  const [profilePhoto, setProfilePhoto] = useState<string | null>(
    profilePhotoUrl,
  );
  const [newNickName, setNickName] = useState<string>(nickname);

  const onImageUpload = async () => {};

  return (
    <Container>
      <TouchableOpacity>
        <ProfilePhoto />
      </TouchableOpacity>
      <LabelInput label={'별명'} value={newNickName} onChange={setNickName} />
    </Container>
  );
};

export default ModifyProfileScreen;
