import { totalQuestionsNr } from "../../constants/questions";
import { colors } from "../../constants/styles";
import { BarContainer, ProgressBar } from "./ProgressBarLine.styled";

interface ProgressBarLineProps {
  currentNr: number;
};

const ProgressBarLine:React.FC<ProgressBarLineProps> = ({ currentNr }: ProgressBarLineProps) => {
  return (
    <BarContainer>
      <ProgressBar width="100%" color={colors.silver}>
        <ProgressBar width={`${currentNr*100/totalQuestionsNr}%`} color={colors.magenta} />
      </ProgressBar>
    </BarContainer>
  )
}

export default ProgressBarLine;