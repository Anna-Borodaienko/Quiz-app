import { Icon, IconWrapper, StyledButton, StyledOption } from "./OptionCardVertical.styled";
import female from '../../images/female.png';
import male from '../../images/male.png';
import other from '../../images/other.png';

interface OptionCardVerticalProps {
  option: string;
  handleChoose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ImageMap {
  [key: string]: string;
}

const image: ImageMap = {
  "Female": female,
  "Male": male,
  "Other": other,
};

const OptionCardVertical:React.FC<OptionCardVerticalProps> = ({ option, handleChoose }: OptionCardVerticalProps) => {

  const imagePath = image[option];

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
