import styled from 'styled-components';
import { colors } from '../../../constants/styles';
import { animationDelay } from '../../../constants/styles';

interface StyledButtonProps {
  height?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: ${(props) => (props.height === 'small' ? '50px' : '70px')};
  width: 100%;
  background-color: ${colors.midnightBlue};
  border-radius: 16px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  border: none;
  transition: background-color ${animationDelay};

  &:hover {
    background-color: ${colors.opacityMagenta40};
  }
`;

export const StyledOption = styled.span`
  font-weight: 600;
  font-size: 17px;
  color: ${colors.white};
`;
