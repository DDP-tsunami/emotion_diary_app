import {color} from '@src/common/utils/common.style';
import React from 'react';
import {Shadow} from 'react-native-shadow-2';
import styled from 'styled-components/native';

const defaultImage = require('@res/image/default_profile.png');
interface Props {
  photoUrl?: string | null;
  size?: number;
  margin?: string;
}

interface StyleProps {
  size?: number;
  margin?: string;
}

const Container = styled.View<StyleProps>`
  width: ${props => (props.size ? `${props.size}px` : '100px')};
  height: ${props => (props.size ? `${props.size}px` : '100px')};

  border-radius: ${props => (props.size ? `${props.size / 2}px` : '50px')};
`;

const Photo = styled.Image<StyleProps>`
  width: ${props => (props.size ? `${props.size}px` : '100px')};
  height: ${props => (props.size ? `${props.size}px` : '100px')};

  border-radius: ${props => (props.size ? `${props.size / 2}px` : '50px')};
  border-color: ${color.white};
  border-width: ${({size}) => (size ? `${size / 10}px` : '8px')};
`;

const ProfilePhoto = ({photoUrl, size}: Props) => {
  return (
    <Shadow radius={size ? size / 2 : 50} offset={[2, 2]} distance={3}>
      <Container size={size}>
        <Photo source={photoUrl ? {uri: photoUrl} : defaultImage} size={size} />
      </Container>
    </Shadow>
  );
};

export default ProfilePhoto;
