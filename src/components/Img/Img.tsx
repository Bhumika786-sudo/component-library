import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<ImgProps>`
  width: ${(props: ImgProps) => props.width || 'auto'};
  height: ${(props: ImgProps) => props.height || 'auto'};
  max-width: 100%;
  background-color: ${(props: ImgProps) =>
    props.disabled ? '#f0f0f0' : props.backgroundColor || 'transparent'};
  border-radius: ${(props: ImgProps) => props.borderRadius || '0'};
  opacity: ${(props: ImgProps) => (props.disabled ? 0.4 : 1)};
  cursor: ${(props: ImgProps) => (props.disabled ? 'not-allowed' : 'default')};
  transition: all 0.3s ease;
  filter: ${(props: ImgProps) => (props.disabled ? 'grayscale(100%)' : 'none')};

  &:hover {
    opacity: ${(props: ImgProps) => (props.disabled ? 0.4 : 0.9)};
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  disabled = false,
  backgroundColor,
  borderRadius,
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      disabled={disabled}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
    />
  );
};

export default Img;
