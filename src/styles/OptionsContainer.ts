import { styled } from "styled-components";

interface OptionContainerProps {
  direction?: string;
}

export const OptionsContainer = styled.div<OptionContainerProps>`
 display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: ${props => props.direction || "column"};
  gap: 12px;
`
