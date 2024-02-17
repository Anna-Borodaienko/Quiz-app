import { styled } from "styled-components";
import { colors } from "../../constants/styles";
import { animationDelay } from "../../constants/questions";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  height: 50px;
  width: 100%;
  background-color: ${colors.darkPurple};
  border-radius: 1000px;
  padding: 16px;
  color: ${colors.white};
  font-family: "Albert Sans", sans-serif;
  font-size: 17px;
  font-weight: 800;
  line-height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
  transition: background-color ${animationDelay};

  &:hover {
    background-color: ${colors.opacityMagenta40};
  }
`
export const  StyledText = styled.div`
  font-family: "Albert Sans", sans-serif;
  font-size: 16px;
  color: ${colors.blueGray};
`
