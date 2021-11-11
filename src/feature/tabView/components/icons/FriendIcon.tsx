import React from 'react';
import {Image} from 'react-native';

const friendIcon = require('@res/image/friend_icon.png');
const friendFocusedIcon = require('@res/image/friend_focused_icon.png');

interface Props {
  fucused: boolean;
  size: number;
}
interface ImageProps {
  size: number;
}

const FriendIcon = ({fucused, size}: Props) => {
  return (
    <Image
      source={fucused ? friendFocusedIcon : friendIcon}
      style={{width: size + 1.5, height: size}}
    />
  );
};

export default FriendIcon;
