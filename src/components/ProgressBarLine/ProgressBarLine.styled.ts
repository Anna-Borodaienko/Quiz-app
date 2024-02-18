import { styled } from 'styled-components';

export const BarContainer = styled.div`
  margin: 5px;
  height: 5px;
  width: 90%;
`;

interface ProgressBarProps {
  width: string;
  color: string;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  border-radius: 15px;
  height: 4px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
`;
