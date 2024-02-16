import styled from "styled-components";
import { colors } from "../../constants/styles";

interface StyledButtonProps {
  selected: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: 56px;
  width: 100%;
  background-color: ${props => props.selected ? colors.opacityMagenta20 : colors.midnightBlue};
  border: 2px solid ${props => props.selected ? colors.lightMagenta : colors.darkPurple};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${colors.opacityMagenta40};
  }
`

export const StyledOption = styled.span`
  font-weight: 600;
  font-size: 17px;
  color: ${colors.white};
`