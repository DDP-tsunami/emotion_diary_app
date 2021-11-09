/* eslint-disable react-hooks/exhaustive-deps */
import getDate from '@src/common/function/getDate';
import {getHyphonFormatDate} from '@src/common/function/getFormatDate';
import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import Calendar, {
  EventRenderer,
  CalendarTouchableOpacityProps,
  ICalendarEvent,
} from 'react-native-big-calendar';
import styled from 'styled-components/native';
import {getEmotionsAPI} from '../utils/emotion.api';
import {CustomEvent, Emotion} from '../utils/emotion.type';
import CalenderEventItem from './CalenderEventItem';
import MyDetailEmotionModal from './MyDetailEmotionModal';

const Event = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

const EmotionCalendar = () => {
  const [date, setDate] = useState<string>(getHyphonFormatDate(new Date()));
  const [events, setEvents] = useState<ICalendarEvent<CustomEvent>[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedEmotion, setSelectedEmotion] = useState<null | Emotion>(null);

  const getEmotions = async (currentDate: string) => {
    const result = await getEmotionsAPI(currentDate);
    const eventList: CustomEvent[] = result.map(
      (emotion: Emotion): CustomEvent => {
        const emotionDate: Date = getDate(emotion.date);
        return {
          start: emotionDate,
          end: emotionDate,
          title: emotion.emotion,
          emotion: emotion,
          children: <CalenderEventItem emotion={emotion.emotion} />,
        };
      },
    );
    setEvents(eventList);
  };
  const eventItem: EventRenderer<any> = (
    event: ICalendarEvent<any>,
    touchProps: CalendarTouchableOpacityProps,
  ) => <Event onPress={touchProps.onPress}>{event.children}</Event>;

  const onChangeDate = ([start]: Date[]) => {
    setDate(getHyphonFormatDate(start));
  };

  useEffect(() => {
    getEmotions(date);
  }, [date]);

  const MyCalendar = useMemo(() => {
    return (
      <Calendar
        events={events}
        height={500}
        mode={'month'}
        swipeEnabled={true}
        onChangeDate={onChangeDate}
        renderEvent={eventItem}
        onPressEvent={(event: ICalendarEvent<CustomEvent>) => {
          setSelectedEmotion(event.emotion);
          setModalVisible(true);
        }}
      />
    );
  }, [events]);

  return (
    <View>
      {MyCalendar}
      <MyDetailEmotionModal
        emotion={selectedEmotion}
        isVisible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setSelectedEmotion(null);
        }}
      />
    </View>
  );
};

export default EmotionCalendar;
