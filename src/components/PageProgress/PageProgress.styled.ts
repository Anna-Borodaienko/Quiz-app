import { styled } from "styled-components";

export const StyledCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Albert Sans", sans-serif;
  font-size: 18px;
  font-weight: 800;
  width: 325px;
`

interface StyledCountProps {
  color: string;
}

export const StyledCount = styled.span<StyledCountProps>`
  color: ${props => props.color};
  padding: 0 2px;
`
