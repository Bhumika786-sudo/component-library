import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

interface HeroContainerProps {
  disabled?: boolean;
  backgroundColor?: string;
  height?: string;
}

interface HeroImgProps {
  disabled?: boolean;
}

interface HeroOverlayProps {
  disabled?: boolean;
}

interface HeroTitleProps {
  textColor?: string;
}

interface HeroSubtitleProps {
  textColor?: string;
}

const HeroContainer = styled.div<HeroContainerProps>`
  position: relative;
  width: 100%;
  height: ${(props: HeroContainerProps) => props.height || '400px'};
  background-color: ${(props: HeroContainerProps) => props.disabled ? '#e0e0e0' : props.backgroundColor || '#000000'};
  overflow: hidden;
  cursor: ${(props: HeroContainerProps) => props.disabled ? 'not-allowed' : 'default'};
  opacity: ${(props: HeroContainerProps) => props.disabled ? 0.6 : 1};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const HeroImg = styled.img<HeroImgProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${(props: HeroImgProps) => props.disabled ? 'grayscale(100%)' : 'none'};
`;

const HeroOverlay = styled.div<HeroOverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props: HeroOverlayProps) => props.disabled ? 'rgba(150, 150, 150, 0.5)' : 'rgba(0, 0, 0, 0.4)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const HeroTitle = styled.h1<HeroTitleProps>`
  color: ${(props: HeroTitleProps) => props.textColor || '#ffffff'};
  font-size: 48px;
  margin: 0 0 16px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const HeroSubtitle = styled.p<HeroSubtitleProps>`
  color: ${(props: HeroSubtitleProps) => props.textColor || '#ffffff'};
  font-size: 20px;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const HeroImage: React.FC<HeroImageProps> = ({ 
  src, 
  alt, 
  title, 
  subtitle, 
  disabled = false, 
  backgroundColor,
  textColor,
  height 
}) => {
  return (
    <HeroContainer disabled={disabled} backgroundColor={backgroundColor} height={height}>
      <HeroImg src={src} alt={alt} disabled={disabled} />
      {(title || subtitle) && (
        <HeroOverlay disabled={disabled}>
          {title && <HeroTitle textColor={textColor}>{title}</HeroTitle>}
          {subtitle && <HeroSubtitle textColor={textColor}>{subtitle}</HeroSubtitle>}
        </HeroOverlay>
      )}
    </HeroContainer>
  );
};

export default HeroImage;