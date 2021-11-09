import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import AlarmItem from '../component/AlarmItem';
import {getAlarmListAPI} from '../utils/alarm.api';
import {Alarm} from '../utils/alarm.type';

const AlarmListScreen = () => {
  const [alarmList, setAlarmList] = useState<Alarm[]>([]);

  useState(() => {
    getAlarmListAPI().then(result => {
      setAlarmList(result.notices);
    });
  }, []);

  const onDeleteAlarm = (noticeId: string) => {
    setAlarmList(alarmList.filter((alarm: Alarm) => alarm.id !== noticeId));
  };

  return (
    <ScrollView>
      {alarmList.map(alarm => (
        <AlarmItem
          key={alarm.id}
          alarm={alarm}
          onDelete={() => onDeleteAlarm(alarm.id)}
        />
      ))}
    </ScrollView>
  );
};

export default AlarmListScreen;
