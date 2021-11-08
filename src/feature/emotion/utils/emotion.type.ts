export enum EmotionType {
  SUN = 'sun',
  RAIN = 'rain',
  CLOUD = 'cloud',
  THUNDER = 'thunder',
}

export const EmojiMapper = {
  [EmotionType.SUN]: '☀',
  [EmotionType.CLOUD]: '☁',
  [EmotionType.RAIN]: '🌧',
  [EmotionType.THUNDER]: '🌩',
};

export interface Emotion {
  id: number;
  emotion: EmotionType;
  emotionScope: boolean;
  date: string;
  detailScope?: boolean;
}

export interface FeedEmotion extends Emotion {
  memberId: number;
  profilePhotoUrl: string | null;
  name: string;
  nickname: string;
}
