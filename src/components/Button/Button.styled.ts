import styled from 'styled-components';
import { colors } from '../../constants/styles';
import { animationDelay } from '../../constants/styles';

interface StyledButtonProps {
  disabled: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: 50px;
  width: 100%;
  background-color: ${(props) =>
    props.disabled ? colors.opacityMagenta40 : colors.magenta};
  border: ${colors.darkPurple};
  border-radius: 1000px;
  margin-bottom: 24px;
  padding: 16px;
  color: ${colors.white};
  font-family: 'Albert Sans', sans-serif;
  font-size: 17px;
  font-weight: 800;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color ${animationDelay};

  &:hover {
    background-color: ${colors.opacityMagenta40};
  }
`;
