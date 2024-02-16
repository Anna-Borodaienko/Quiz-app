import { StyledButton, StyledOption } from "./OptionCard.styled";

interface OptionCardProps {
  option: string;
  handleChoose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  height?: string;
}

const OptionCard:React.FC<OptionCardProps> = ({ option, handleChoose, height }: OptionCardProps) => {
  return (
    <StyledButton onClick={handleChoose} height={height}>
      <StyledOption>{option}</StyledOption>
    </StyledButton>
  );
};

export default OptionCard;
