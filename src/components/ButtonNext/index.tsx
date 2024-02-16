import { StyledButton } from "./ButtonNext.styled";

interface ButtonNextProps {
  onClick: () => void;
  disabled: boolean;
  title: string;
} 

const ButtonNext:React.FC<ButtonNextProps> = ({ onClick, disabled, title }: ButtonNextProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {title}
    </StyledButton>
  )
}

export default ButtonNext;
