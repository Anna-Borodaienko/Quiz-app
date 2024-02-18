import styled from "styled-components";
import { colors } from "../../constants/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const StyledTitle = styled.div`
  font-family: "Niconne", sans-serif;
  color: ${colors.blueGray};
  font-size: 36px;
  font-weight: 400;
  line-height: 44px;
  text-align: center;
` 

export const StyledText = styled.div`
  color: ${colors.blueGray};
  font-family: "Albert Sans", sans-serif;
  font-size: 18px;
  text-align: center;
  margin: 5px 0 60px;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.img`
  width: 120px;
  height: 120px;
`
