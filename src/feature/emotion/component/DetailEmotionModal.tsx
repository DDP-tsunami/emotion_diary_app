import React, {useEffect, useState} from 'react';
import {StyleProp, View, Text, ViewStyle, TextStyle} from 'react-native';
import Modal from 'react-native-modal';

import {FeedEmotion} from '../utils/emotion.type';
import getDate from '@src/common/function/getDate';
import {getDotFormatDate} from '@src/common/function/getFormatDate';
import {getEmotionDetailAPI} from '../utils/emotion.api';
import ProfilePhoto from '@src/feature/profile/component/ProfilePhoto';
import {color} from '@src/common/utils/common.style';
import EmotionItem from './EmotionItem';

interface Props {
  emotion: FeedEmotion | null;
  isVisible: boolean;
  onClose: () => void;
}

const style: {[key: string]: StyleProp<ViewStyle | TextStyle>} = {
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: 360,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',

    padding: 16,
    paddingBottom: 32,

    backgroundColor: '#fff',

    borderRadius: 4,
  },
  profile: {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

    paddingTop: 8,
    paddingBottom: 8,

    borderBottomColor: color.black,
    borderBottomWidth: 2,
  },
  nickname: {
    marginLeft: 12,

    fontSize: 24,
    color: color.black,
    lineHeight: 30,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  detailSection: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    paddingTop: 12,
    paddingBottom: 12,

    borderBottomWidth: 2,
    borderBottomColor: color.gray,
    borderRightWidth: 1,
    borderRightColor: color.gray,
  },
  emotionSection: {
    height: '100%',

    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderBottomWidth: 2,
    borderBottomColor: color.gray,
    borderLeftWidth: 1,
    borderLeftColor: color.gray,
  },
  year: {
    fontSize: 24,
    color: color.black,
  },
  month: {
    color: color.black,
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 44,
  },
  detail: {
    flex: 1,
    alignSelf: 'flex-start',

    padding: 4,

    color: color.black,
    fontSize: 32,
  },
};

const DetailEmotionModal = ({isVisible, onClose, emotion}: Props) => {
  const [detail, setDetail] = useState('');

  useEffect(() => {
    if (emotion) {
      getEmotionDetailAPI(emotion.id).then(d => {
        setDetail(d);
      });
    }
  });

  return (
    emotion && (
      <Modal
        isVisible={isVisible}
        onBackdropPress={onClose}
        style={style.wrapper}>
        <View style={style.container}>
          <View style={style.profile}>
            <ProfilePhoto photoUrl={emotion.profilePhotoUrl} size={32} />
            <Text style={style.nickname}>{emotion.nickname}</Text>
          </View>
          <View style={style.content}>
            <View style={style.detailSection}>
              <Text style={style.year}>
                {getDotFormatDate(getDate(emotion.date)).year}
              </Text>
              <Text style={style.month}>
                {getDotFormatDate(getDate(emotion.date)).month}
              </Text>
              <Text style={style.detail}>{detail}</Text>
            </View>
            <View style={style.emotionSection}>
              <EmotionItem emoji={emotion.emotion} size={'120px'} />
            </View>
          </View>
        </View>
      </Modal>
    )
  );
};

export default DetailEmotionModal;
