import React from 'react';
import styled from 'styled-components/native';

const defaultImage = require('@src/common/image/default_profile.png');
interface Props {
  photoUrl?: string | null;
  size?: string;
}

interface StyleProps {
  size?: string;
}

const Photo = styled.Image<StyleProps>`
  width: ${props => (props.size ? props.size : '100px')};
  height: ${props => (props.size ? props.size : '100px')};

  margin-bottom: 12px;

  border-radius: 50px;
`;

const ProfilePhoto = ({photoUrl, size}: Props) => {
  return (
    <Photo source={photoUrl ? {uri: photoUrl} : defaultImage} size={size} />
  );
};

export default ProfilePhoto;
