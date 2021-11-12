/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {getReactionAlarmListAPI} from '../utils/alarm.api';
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

const ReactionAlarmList = ({isFocus}: Props) => {
  const [reactionAlarmList, setReactionAlarmList] = useState<Alarm[]>([]);
  const [start, setStart] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);

  const getAlarmList = async () => {
    const result = await getReactionAlarmListAPI(start);
    setReactionAlarmList([...reactionAlarmList, ...result.notices]);
    setTotalCount(result.totalCount);
  };

  useEffect(() => {
    getAlarmList();
  }, [isFocus]);
  useEffect(() => {
    setStart(reactionAlarmList.length);
  }, [reactionAlarmList]);

  return (
    <Container>
      {reactionAlarmList.map(alarm => (
        <AlarmItem key={alarm.id} alarm={alarm} />
      ))}
      {start < totalCount && (
        <Button onPress={getAlarmList}>
          <Text>더 보기 ▽</Text>
        </Button>
      )}
    </Container>
  );
};

export default ReactionAlarmList;
