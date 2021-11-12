/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {getFriendNoticeListAPI} from '../utils/alarm.api';
import {Alarm} from '../utils/alarm.type';
import AlarmItem from './AlarmItem';

interface Props {
  isFocus: boolean;
}

const Container = styled.ScrollView`
  height: 40%;
  width: 100%;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
`;

const FriendAlarmList = ({isFocus}: Props) => {
  const [friendAlarmList, setFriendAlarmList] = useState<Alarm[]>([]);
  const [start, setStart] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);

  const getAlarmList = async () => {
    const result = await getFriendNoticeListAPI(start);

    setFriendAlarmList([...friendAlarmList, ...result.notices]);
    setTotalCount(result.totalCount);
  };
  const onDelete = (noticeId: string) => {
    setFriendAlarmList(friendAlarmList.filter(alarm => alarm.id !== noticeId));
    setStart(start - 1);
    setTotalCount(totalCount - 1);
  };

  useEffect(() => {
    getAlarmList();
  }, [isFocus]);

  useEffect(() => {
    setStart(friendAlarmList.length);
  }, [friendAlarmList]);

  return (
    <Container>
      {friendAlarmList.map(alarm => (
        <AlarmItem
          key={alarm.id}
          alarm={alarm}
          onDelete={() => onDelete(alarm.id)}
        />
      ))}
      {start < totalCount && (
        <Button onPress={getAlarmList}>
          <Text>더 보기 ▽</Text>
        </Button>
      )}
    </Container>
  );
};

export default FriendAlarmList;
