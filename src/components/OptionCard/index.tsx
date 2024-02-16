import { StyledButton, StyledOption } from "./OptionCard.styled";

interface OptionCardProps {
  option: string;
  height?: string;
  handleChoose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const OptionCard:React.FC<OptionCardProps> = ({ option, handleChoose }: OptionCardProps) => {

  return (
    <StyledButton onClick={handleChoose}>
      <StyledOption>{option}</StyledOption>
    </StyledButton>
  );
};

export default OptionCard;
