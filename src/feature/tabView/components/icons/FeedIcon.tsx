import React from 'react';
import {Image} from 'react-native';

const feedIcon = require('@res/image/feed_icon.png');
const feedFocusedIcon = require('@res/image/feed_focused_icon.png');

interface Props {
  fucused: boolean;
  size: number;
}
interface ImageProps {
  size: number;
}

const FeedIcon = ({fucused, size}: Props) => {
  return (
    <Image
      source={fucused ? feedFocusedIcon : feedIcon}
      style={{width: size + 1.5, height: size}}
    />
  );
};

export default FeedIcon;
