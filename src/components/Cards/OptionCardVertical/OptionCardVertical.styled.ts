import styled from "styled-components";
import { colors } from "../../../constants/styles";
import { animationDelay } from "../../../constants/styles";

export const StyledButton = styled.button`
  height: 140px;
  width: 100px;
  background-color: ${colors.midnightBlue};
  border-radius: 12px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: none;
  gap: 10px;
  transition: background-color ${animationDelay};

  &:hover {
    background-color: ${colors.opacityMagenta40};
  }
`

export const IconWrapper = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.img`
  height: 50px;
  width: 50px;
`

export const StyledOption = styled.span`
  font-weight: 600;
  font-size: 15px;
  color: ${colors.white};
`
