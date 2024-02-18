import { styled } from 'styled-components';
import { appHeight, appWidth, colors } from './constants/styles';

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledApp = styled.div`
  width: ${appWidth};
  height: ${appHeight};
  color: ${colors.lightBlue};
  background: ${colors.darkPurple};
  border-radius: 2%;
  border: 2px solid ${colors.charcoal};
  box-shadow: 2px 4px 6px 0px ${colors.charcoal};
`;
