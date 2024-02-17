import React from "react";
import { StyledText, Wrapper } from "./ErrorMessage.styled";

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ text }: ErrorMessageProps) => {
  return (
    <Wrapper>
      <StyledText>{text}</StyledText>
    </Wrapper>
  )
}

export default ErrorMessage;
