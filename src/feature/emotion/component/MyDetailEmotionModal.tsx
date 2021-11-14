/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleProp, View, Text, ViewStyle, TextStyle} from 'react-native';
import Modal from 'react-native-modal';

import {Emotion} from '../utils/emotion.type';
import getDate from '@src/common/function/getDate';
import {getDotFormatDate} from '@src/common/function/getFormatDate';
import {getEmotionDetailAPI} from '../utils/emotion.api';
import ProfilePhoto from '@src/feature/profile/component/ProfilePhoto';
import {color} from '@src/common/utils/common.style';
import EmotionItem from './EmotionItem';
import ReactionList from '@src/feature/reaction/template/ReactionList';
import {getProfileDataAPI} from '@src/feature/profile/utils/profile.api';
import {User} from '@src/feature/profile/utils/profile.type';

interface Props {
  emotion: Emotion | null;
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
    height: 480,

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
    fontFamily: 'Pretendard-Light',
    color: color.black,
    lineHeight: 30,
  },
  content: {
    height: 200,

    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

    marginBottom: 20,
  },
  detailSection: {
    height: 200,

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
    height: 200,

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
    fontFamily: 'Pretendard-Light',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 44,
  },
  detail: {
    flex: 1,
    alignSelf: 'flex-start',

    padding: 4,

    color: color.black,
    fontFamily: 'Pretendard-Light',
    fontSize: 32,
  },
};

const MyDetailEmotionModal = ({isVisible, onClose, emotion}: Props) => {
  const [detail, setDetail] = useState('');
  const [user, setUser] = useState<User | null>(null);

  const getEmotionDetail = async () => {
    try {
      if (emotion) {
        const result = await getEmotionDetailAPI(emotion.id);
        setDetail(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMyInformation = async () => {
    const result = await getProfileDataAPI();
    if (result) {
      setUser(result);
    }
  };

  useEffect(() => {
    getEmotionDetail();
  }, [emotion]);
  useEffect(() => {
    getMyInformation();
  }, [user]);

  return (
    emotion && (
      <Modal
        isVisible={isVisible}
        onBackdropPress={onClose}
        style={style.wrapper}>
        <View style={style.container}>
          <View style={style.profile}>
            <ProfilePhoto photoUrl={user?.profilePhotoUrl} size={32} />
            <Text style={style.nickname}>{user?.nickname}</Text>
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
          <ReactionList memoId={emotion.id} />
        </View>
      </Modal>
    )
  );
};

export default MyDetailEmotionModal;
