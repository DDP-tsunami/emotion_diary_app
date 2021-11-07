import getDate from '@src/common/function/getDate';
import React, {useEffect, useState} from 'react';
import {StyleProp, View, Text, ViewStyle, TextStyle} from 'react-native';
import Modal from 'react-native-modal';
import {getEmotionDetailAPI} from '../utils/emotion.api';

import {EmojiMapper, FeedEmotion} from '../utils/emotion.type';

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
    width: '90%',
    height: '60%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',

    padding: 12,

    backgroundColor: '#fff',

    borderRadius: 4,
  },

  date: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',

    marginBottom: 16,
  },
  emotion: {
    fontSize: 32,
    fontWeight: 'bold',

    marginBottom: 16,
  },
  detail: {
    width: '100%',
    height: 120,

    alignSelf: 'flex-start',

    padding: 8,

    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#cdcdcd',
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
          <Text style={style.date}>{getDate(emotion.date)}</Text>
          <Text style={style.emotion}>{EmojiMapper[emotion.emotion]}</Text>
          <Text style={style.detail}>{detail}</Text>
        </View>
      </Modal>
    )
  );
};

export default DetailEmotionModal;
