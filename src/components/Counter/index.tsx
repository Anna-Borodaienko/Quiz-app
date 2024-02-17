import { colors } from "../../constants/styles";
import { StyledCount, StyledCounter } from "./Counter.styled"

interface CounterProps {
  totalNr: number;
  currentNr: number;
}

const Counter:React.FC<CounterProps> = ({ totalNr, currentNr }: CounterProps) => {

  return (
    <StyledCounter>
      <StyledCount color={colors.magenta}>{currentNr}</StyledCount>
      <StyledCount color={colors.lightBlue}>{` / `}</StyledCount>
      <StyledCount color={colors.lightBlue}>{totalNr}</StyledCount>
    </StyledCounter>
  )
}

export default Counter;
