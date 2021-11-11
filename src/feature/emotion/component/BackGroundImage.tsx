import AsyncStorage from '@react-native-async-storage/async-storage';
import {getFileFromGallery} from '@src/common/function/getPhoto';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const defaultBackground = require('@res/image/default_background.png');

const Image = styled.Image`
  width: 100%;
  height: 200px;
`;

const BackGroundImage = () => {
  const [image, setImage] = useState<{uri: string} | null>(null);

  const onImageUpload = async () => {
    try {
      const file = await getFileFromGallery();
      if (file) {
        const {uri} = file;
        if (uri) {
          setImage({uri});
          await AsyncStorage.setItem('background_image', uri);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getBackgroundImage = async () => {
    const uri = await AsyncStorage.getItem('background_image');
    if (uri) {
      setImage({uri});
    }
  };

  useEffect(() => {
    getBackgroundImage();
  }, []);

  return (
    <TouchableOpacity onPress={onImageUpload}>
      <Image source={image ? image : defaultBackground} />
    </TouchableOpacity>
  );
};

export default BackGroundImage;
