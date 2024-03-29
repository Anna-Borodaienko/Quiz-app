import styled from 'styled-components';
import { appHeight, colors } from '../../constants/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${appHeight};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const StyledMessage = styled.div`
  color: ${colors.white};
  font-size: 18px;
`;
