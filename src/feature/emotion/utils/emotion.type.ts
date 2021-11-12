import React from 'react';

const sun = require('@res/image/sun.png');
const rain = require('@res/image/rain.png');
const cloud = require('@res/image/cloud.png');
const thunder = require('@res/image/thunder.png');

export enum EmotionType {
  SUN = 'sun',
  RAIN = 'rain',
  CLOUD = 'cloud',
  THUNDER = 'thunder',
}

export const EmojiMapper = {
  [EmotionType.SUN]: sun,
  [EmotionType.CLOUD]: cloud,
  [EmotionType.RAIN]: rain,
  [EmotionType.THUNDER]: thunder,
};

export interface Emotion {
  id: number;
  emotion: EmotionType;
  emotionScope: boolean;
  date: string;
  detailScope: boolean;
}

export interface FeedEmotion extends Emotion {
  memberId: number;
  profilePhotoUrl: string | null;
  name: string;
  nickname: string;
}

export interface MyEmotion extends Emotion {
  detail?: string;
}

export type CustomEvent = {
  start: Date;
  end: Date;
  title: EmotionType;
  emotion: Emotion;
  children?: React.ReactComponentElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
};
