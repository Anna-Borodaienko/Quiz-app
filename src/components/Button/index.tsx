import { useTranslation } from "react-i18next";
import { StyledButton } from "./Button.styled";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  title: string;
} 

const Button:React.FC<ButtonProps> = ({ onClick, disabled, title }: ButtonProps) => {

  const { t } = useTranslation();


  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {t(title)}
    </StyledButton>
  )
}

export default Button;
