import React from 'react';
import styled from 'styled-components/native';

import {User} from '@src/feature/profile/utils/profile.type';
import {
  acceptFriendRequestAPI,
  refuseFriendRequestAPI,
} from '@src/feature/friend/utils/friend.api';
import BlackButton from '@src/common/component/button/BlackButton';

interface Props {
  noticeId: string;
  sender: User;
  onDelete?: () => void;
}

const Container = styled.View`
  height: 100%;

  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-left: 12px;
`;

const Text = styled.Text`
  width: 65%;

  font-family: Pretendard;
  font-size: 16px;
`;

const ButtonSection = styled.View`
  width: 100%;

  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RequestAlarm = ({sender, noticeId, onDelete}: Props) => {
  const onAccept = async () => {
    await acceptFriendRequestAPI(sender.id, noticeId);
    onDelete && onDelete();
  };
  const onRefuse = async () => {
    await refuseFriendRequestAPI(noticeId);
    onDelete && onDelete();
  };

  return (
    <Container>
      <Text>{`${sender.nickname}님이\n팔로우를 요청했습니다.`}</Text>
      <ButtonSection>
        <BlackButton
          title={'수락'}
          width={'36px'}
          height={'32px'}
          onClick={onAccept}
        />
        <BlackButton
          title={'거절'}
          width={'36px'}
          height={'32px'}
          onClick={onRefuse}
        />
      </ButtonSection>
    </Container>
  );
};

export default RequestAlarm;
