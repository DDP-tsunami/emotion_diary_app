import React from 'react';
import styled from 'styled-components/native';

import {User} from '@src/feature/profile/utils/profile.type';
import BasicButton from '@src/common/component/button/BasicButton';
import {
  acceptFriendRequestAPI,
  refuseFriendRequestAPI,
} from '@src/feature/friend/utils/friend.api';

interface Props {
  noticeId: string;
  sender: User;
  onDelete: () => void;
}

const Container = styled.View`
  height: 100%;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Text = styled.Text`
  font-size: 20px;
`;

const ButtonSection = styled.View`
  width: 100%;

  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const RequestAlarm = ({sender, noticeId, onDelete}: Props) => {
  const onAccept = async () => {
    await acceptFriendRequestAPI(sender.id, noticeId);
    onDelete();
  };
  const onRefuse = async () => {
    await refuseFriendRequestAPI(noticeId);
    onDelete();
  };

  return (
    <Container>
      <Text>{`${sender.nickname}님이 친구요청을 보냈습니다.`}</Text>
      <ButtonSection>
        <BasicButton title={'수락'} width={'40px'} onClick={onAccept} />
        <BasicButton title={'거절'} width={'40px'} onClick={onRefuse} />
      </ButtonSection>
    </Container>
  );
};

export default RequestAlarm;
