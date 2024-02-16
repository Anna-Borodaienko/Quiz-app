import { styled } from "styled-components";

interface OptionContainerProps {
  direction?: string;
  wrap?: string;
  align? :string;
}

export const OptionsContainer = styled.div<OptionContainerProps>`
 display: flex;
  align-items: ${props => props.align || "flex-start"};
  justify-content: center;
  flex-direction: ${props => props.direction || "column"};
  gap: 12px;
  flex-wrap: ${props => props.wrap || "nowrap"};
`
