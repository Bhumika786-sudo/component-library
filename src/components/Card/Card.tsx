import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

interface StyledCardProps {
  disabled?: boolean;
  backgroundColor?: string;
}

interface CardImageProps {
  disabled?: boolean;
}

interface CardTitleProps {
  textColor?: string;
  disabled?: boolean;
}

interface CardContentProps {
  textColor?: string;
  disabled?: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
  background-color: ${(props: StyledCardProps) =>
    props.disabled ? '#f5f5f5' : props.backgroundColor || '#ffffff'};
  border: 1px solid
    ${(props: StyledCardProps) => (props.disabled ? '#d0d0d0' : '#e0e0e0')};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: ${(props: StyledCardProps) =>
    props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${(props: StyledCardProps) => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;
  max-width: 400px;

  &:hover {
    box-shadow: ${(props: StyledCardProps) =>
      props.disabled
        ? '0 2px 4px rgba(0, 0, 0, 0.1)'
        : '0 4px 8px rgba(0, 0, 0, 0.15)'};
    transform: ${(props: StyledCardProps) =>
      props.disabled ? 'none' : 'translateY(-2px)'};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CardImage = styled.img<CardImageProps>`
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: ${(props: CardImageProps) =>
    props.disabled ? 'grayscale(100%)' : 'none'};
`;

const CardBody = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3<CardTitleProps>`
  color: ${(props: CardTitleProps) =>
    props.disabled ? '#999999' : props.textColor || '#333333'};
  margin: 0 0 12px 0;
  font-size: 20px;
`;

const CardContent = styled.p<CardContentProps>`
  color: ${(props: CardContentProps) =>
    props.disabled ? '#999999' : props.textColor || '#666666'};
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
`;

const Card: React.FC<CardProps> = ({
  title,
  content,
  imageUrl,
  disabled = false,
  backgroundColor,
  textColor,
}) => {
  return (
    <StyledCard disabled={disabled} backgroundColor={backgroundColor}>
      {imageUrl && <CardImage src={imageUrl} alt={title} disabled={disabled} />}
      <CardBody>
        <CardTitle textColor={textColor} disabled={disabled}>
          {title}
        </CardTitle>
        <CardContent textColor={textColor} disabled={disabled}>
          {content}
        </CardContent>
      </CardBody>
    </StyledCard>
  );
};

export default Card;
