import React from 'react';
import {Image} from 'react-native';

const myPageIcon = require('@res/image/mypage_icon.png');
const myPageFocusedIcon = require('@res/image/mypage_focused_icon.png');

interface Props {
  fucused: boolean;
  size: number;
}
interface ImageProps {
  size: number;
}

const MyPageIcon = ({fucused, size}: Props) => {
  return (
    <Image
      source={fucused ? myPageFocusedIcon : myPageIcon}
      style={{width: size, height: size + 1.5}}
    />
  );
};

export default MyPageIcon;
