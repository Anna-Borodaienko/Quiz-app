import React from 'react';
import { StyledText, Wrapper } from './ErrorMessage.styled';
import { useTranslation } from 'react-i18next';

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  text,
}: ErrorMessageProps) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <StyledText>{text ? t(text) : ''}</StyledText>
    </Wrapper>
  );
};

export default ErrorMessage;
