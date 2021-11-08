import getDate from '@src/common/function/getDate';
import {getHyphonFormatDate} from '@src/common/function/getFormatDate';
import React, {useEffect, useState} from 'react';
import Calendar, {ICalendarEventBase} from 'react-native-big-calendar';
import {getEmotionsAPI} from '../utils/emotion.api';
import {EmojiMapper, Emotion} from '../utils/emotion.type';
import CalenderEventItem from './CalenderEventItem';

const EmotionCalendar = () => {
  const [date, setDate] = useState<string>(getHyphonFormatDate(new Date()));
  const [events, setEvents] = useState<ICalendarEventBase[]>([]);

  const getEmotions = async (currentDate: string) => {
    const result = await getEmotionsAPI(currentDate);
    const eventList: ICalendarEventBase[] = result.map(
      (emotion: Emotion): ICalendarEventBase => {
        const d = getDate(emotion.date);
        return {
          start: d,
          end: d,
          title: EmojiMapper[emotion.emotion],
          children: <CalenderEventItem emotion={emotion.emotion} />,
        };
      },
    );
    setEvents(eventList);
  };
  const onChangeDate = ([start]: Date[]) => {
    setDate(getHyphonFormatDate(start));
  };

  useEffect(() => {
    getEmotions(date);
  }, [date]);

  return (
    <Calendar
      events={events}
      height={350}
      mode={'month'}
      swipeEnabled={true}
      onChangeDate={onChangeDate}
    />
  );
};

export default EmotionCalendar;
