import { styled } from 'styled-components';
import { appHeight } from '../constants/styles';

export const PageContainerWithButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 24px;
  height: ${appHeight};
`;
