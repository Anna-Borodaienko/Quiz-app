import { colors } from "../../constants/styles";
import { StyledCount, StyledCounter } from "./PageProgress.styled"

interface PageProgressProps {
  totalPages: number;
  currentPage: number;
}

const PageProgress:React.FC<PageProgressProps> = ({ totalPages, currentPage }: PageProgressProps) => {

  return (
    <StyledCounter>
      <StyledCount color={colors.magenta}>{currentPage}</StyledCount>
      <StyledCount color={colors.lightBlue}>{` / `}</StyledCount>
      <StyledCount color={colors.lightBlue}>{totalPages}</StyledCount>
    </StyledCounter>
  )
}

export default PageProgress;
