/* eslint-disable react-hooks/exhaustive-deps */
import getDate from '@src/common/function/getDate';
import {getHyphonFormatDate} from '@src/common/function/getFormatDate';
import {color} from '@src/common/utils/common.style';
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

interface Palette {
  main: string;
  contrastText: string;
}
interface CalendarTheme {
  palette: {
    primary: Palette;
    nowIndicator: string;
    gray: {
      100: string;
      200: string;
      300: string;
      500: string;
      800: string;
    };
  };
}

const calendarTheme: CalendarTheme = {
  palette: {
    primary: {
      main: '#ccccff',
      contrastText: '#FF0000',
    },
    nowIndicator: color.black,
    gray: {
      100: color.white,
      200: color.white,
      300: '#ffffff',
      500: '#868686',
      800: '#565656',
    },
  },
};

const Event = styled.TouchableOpacity`
  width: 100%;

  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;

  padding: 12px;
`;

const EmotionCalendar = () => {
  const [date, setDate] = useState<string>(getHyphonFormatDate(new Date()));
  const [events, setEvents] = useState<ICalendarEvent<CustomEvent>[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedEmotion, setSelectedEmotion] = useState<null | Emotion>(null);

  const eventItem: EventRenderer<CustomEvent> = (
    event: ICalendarEvent<CustomEvent>,
    touchProps: CalendarTouchableOpacityProps,
  ) => <Event onPress={touchProps.onPress}>{event.children}</Event>;

  const onChangeDate = ([start]: Date[]) => {
    setDate(getHyphonFormatDate(start));
  };

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

  useEffect(() => {
    getEmotions(date);
  }, [date]);

  const MyCalendar = useMemo(() => {
    return (
      <Calendar
        events={events}
        height={350}
        mode={'month'}
        swipeEnabled={true}
        theme={calendarTheme}
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
