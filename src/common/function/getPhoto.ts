import {Asset, launchImageLibrary} from 'react-native-image-picker';

export const getFileFromGallery = (): Promise<Asset | null> => {
  return new Promise((res, rej) => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      const {didCancel, errorCode, errorMessage, assets} = response;
      if (didCancel) {
        res(null);
      } else if (errorCode && errorMessage) {
        rej({errorCode, errorMessage});
      } else if (assets) {
        res(assets[0]);
      }
    });
  });
};
