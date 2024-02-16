import { styled } from "styled-components";

interface OptionContainerProps {
  direction?: string;
  wrap?: string;
}

export const OptionsContainer = styled.div<OptionContainerProps>`
 display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: ${props => props.direction || "column"};
  gap: 12px;
  flex-wrap: ${props => props.wrap || "nowrap"};
`
