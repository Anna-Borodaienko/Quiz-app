import { totalQuestions } from '../../constants/questions';
import { colors } from '../../constants/styles';
import { BarContainer, ProgressBar } from './ProgressBarLine.styled';

interface ProgressBarLineProps {
  currentPage: number;
}

const ProgressBarLine: React.FC<ProgressBarLineProps> = ({
  currentPage,
}: ProgressBarLineProps) => {
  return (
    <BarContainer>
      <ProgressBar width="100%" color={colors.silver}>
        <ProgressBar
          width={`${(currentPage * 100) / totalQuestions}%`}
          color={colors.magenta}
        />
      </ProgressBar>
    </BarContainer>
  );
};

export default ProgressBarLine;
