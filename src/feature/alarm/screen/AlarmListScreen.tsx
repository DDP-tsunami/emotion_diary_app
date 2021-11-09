import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import AlarmItem from '../component/AlarmItem';
import {getAlarmListAPI} from '../utils/alarm.api';
import {Alarm} from '../utils/alarm.type';

const AlarmListScreen = () => {
  const [alarmList, setAlarmList] = useState<Alarm[]>([]);
  useState(() => {
    getAlarmListAPI().then(result => {
      console.log(result);
      setAlarmList(result.notices);
    });
  }, []);

  return (
    <ScrollView>
      {alarmList.map(alarm => (
        <AlarmItem key={alarm.id} alarm={alarm} />
      ))}
    </ScrollView>
  );
};

export default AlarmListScreen;
