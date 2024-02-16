import styled from "styled-components";
import { colors } from "../../constants/styles";

interface StyledButtonProps {
  selected: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: 80px;
  width: 80px;
  background-color: ${props => props.selected ? colors.opacityMagenta20 : colors.midnightBlue};
  border: 2px solid ${props => props.selected ? colors.lightMagenta : colors.darkPurple};
  border-radius: 11111px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 5px;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${colors.opacityMagenta40};
  }
`

export const IconWrapper = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.img`
  width: 25px;
  height: 25px;
`

export const StyledOption = styled.span`
  font-weight: 500;
  font-size: 10px;
  color: ${colors.white};
`