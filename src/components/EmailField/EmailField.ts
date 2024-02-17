import styled from "styled-components";
import { colors } from "../../constants/styles";
import { animationDelay } from "../../constants/questions";

export const Wrapper = styled.div`
  margin: 5px 0;
`

export const StyledInput = styled.input`
  height: 70px;
  width: 100%;
  background-color: ${colors.midnightBlue};
  border: 2px solid ${colors.darkPurple};
  border-radius: 16px;
  padding: 12px 20px;
  transition: background-color ${animationDelay};
  font-size: 17px;
  font-weight: 500;
  color: ${colors.white};
  transition: background-color ${animationDelay};

  &:not(:placeholder-shown)
   {
    background-color: ${colors.lightPurple};
    border-color: ${colors.lightMagenta};
  }

  &:focus {
    outline: none;
    background-color: ${colors.lightPurple};
    border-color: ${colors.lightMagenta};
  }
`