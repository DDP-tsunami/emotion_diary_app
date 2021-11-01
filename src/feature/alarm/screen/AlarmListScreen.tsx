import React from 'react';
import {ScrollView} from 'react-native';
import AlarmItem from '../component/AlarmItem';
import {dummyAlarmEntites, dummyAlarmIdList} from '../data/dummyAlarmData';

const AlarmListScreen = () => {
  return (
    <ScrollView>
      {dummyAlarmIdList.map(id => (
        <AlarmItem key={id} alarm={dummyAlarmEntites[id]} />
      ))}
    </ScrollView>
  );
};

export default AlarmListScreen;
