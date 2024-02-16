import { Icon, IconWrapper, StyledButton, StyledOption } from "./OptionCardVertical.styles";
import female from '../../images/female.png';
import male from '../../images/male.png';
import other from '../../images/other.png';

interface OptionCardVerticalProps {
  option: string;
  handleChoose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const OptionCardVertical:React.FC<OptionCardVerticalProps> = ({ option, handleChoose }: OptionCardVerticalProps) => {

  const getImage = (option: string): string | undefined => {
    switch (option) {
      case 'Female':
        return female;
      case 'Male':
        return male;
      case 'Other':
        return other;
      default:
        return undefined;
    }
  };

  const imagePath = getImage(option);

  return (
    <StyledButton onClick={handleChoose}>
      <IconWrapper>
        <Icon src={imagePath} alt={option} />
      </IconWrapper>
      <StyledOption>{option}</StyledOption>
    </StyledButton>
  );
};

export default OptionCardVertical;
