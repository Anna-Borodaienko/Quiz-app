import { StyledButton } from "./Button.styled";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  title: string;
} 

const Button:React.FC<ButtonProps> = ({ onClick, disabled, title }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {title}
    </StyledButton>
  )
}

export default Button;
