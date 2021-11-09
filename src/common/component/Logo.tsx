import React from 'react';
import styled from 'styled-components/native';
const LogoImage = require('@src/common/image/app_logo.png');

interface Props {
  size: string;
}
interface ImageProps {
  size: string;
}

const ImageView = styled.Image<ImageProps>`
  width: ${props => props.size};
  height: ${props => props.size};

  border-radius: 16px;

  margin-bottom: 60px;
`;

const Logo = ({size}: Props) => {
  return <ImageView source={LogoImage} size={size} />;
};

export default Logo;
