import React from 'react';
import styled from 'styled-components/native';

interface Props {
  photoUrl: string;
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
  return <Photo source={{uri: photoUrl}} size={size} />;
};

export default ProfilePhoto;
