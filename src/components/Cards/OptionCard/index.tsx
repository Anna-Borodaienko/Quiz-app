import { useTranslation } from 'react-i18next';
import { StyledButton, StyledOption } from './OptionCard.styled';

interface OptionCardProps {
  option: string;
  height?: string;
  handleChoose: (option: string) => void;
}

const OptionCard: React.FC<OptionCardProps> = ({
  option,
  handleChoose,
}: OptionCardProps) => {
  const { t } = useTranslation();

  const handleClick = (): void => {
    handleChoose(option);
  };

  return (
    <StyledButton onClick={handleClick}>
      <StyledOption>{t(option)}</StyledOption>
    </StyledButton>
  );
};

export default OptionCard;
