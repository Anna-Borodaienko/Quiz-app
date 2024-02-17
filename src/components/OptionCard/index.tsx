import { useTranslation } from "react-i18next";
import { StyledButton, StyledOption } from "./OptionCard.styled";

interface OptionCardProps {
  option: string;
  height?: string;
  handleChoose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const OptionCard:React.FC<OptionCardProps> = ({ option, handleChoose }: OptionCardProps) => {

  const { t } = useTranslation();

  return (
    <StyledButton onClick={handleChoose}>
      <StyledOption>{t(option)}</StyledOption>
    </StyledButton>
  );
};

export default OptionCard;
