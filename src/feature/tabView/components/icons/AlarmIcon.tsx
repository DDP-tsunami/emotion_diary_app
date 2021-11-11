import React from 'react';
import {Image} from 'react-native';

const alarmIcon = require('@res/image/alarm_icon.png');
const alarmFocusedIcon = require('@res/image/alarm_focused_icon.png');

interface Props {
  fucused: boolean;
  size: number;
}
interface ImageProps {
  size: number;
}

const AlarmIcon = ({fucused, size}: Props) => {
  return (
    <Image
      source={fucused ? alarmFocusedIcon : alarmIcon}
      style={{width: size + 1.5, height: size}}
    />
  );
};

export default AlarmIcon;
