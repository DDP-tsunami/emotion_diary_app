import React from 'react';
import {Image} from 'react-native';

const addIcon = require('@res/image/add_icon.png');
const addFocusedIcon = require('@res/image/add_focused_icon.png');

interface Props {
  fucused: boolean;
  size: number;
}
interface ImageProps {
  size: number;
}

const AddIcon = ({fucused, size}: Props) => {
  return (
    <Image
      source={fucused ? addFocusedIcon : addIcon}
      style={{width: size + 1.5, height: size}}
    />
  );
};

export default AddIcon;
