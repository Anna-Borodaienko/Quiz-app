import { Icon, IconWrapper, StyledButton, StyledOption } from "./OptionCardVertical.styled";
import female from '../../images/female.png';
import male from '../../images/male.png';
import other from '../../images/other.png';
import { useTranslation } from "react-i18next";
import { ImageMap } from "../../types/questions";

interface OptionCardVerticalProps {
  option: string;
  handleChoose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const image: ImageMap = {
  "Female": female,
  "Male": male,
  "Other": other
}

const OptionCardVertical:React.FC<OptionCardVerticalProps> = ({ option, handleChoose }: OptionCardVerticalProps) => {

  const { t } = useTranslation();

  const imagePath = image[option];

  return (
    <StyledButton onClick={handleChoose}>
      <IconWrapper>
        <Icon src={imagePath} alt={option} />
      </IconWrapper>
      <StyledOption>{t(option)}</StyledOption>
    </StyledButton>
  );
};

export default OptionCardVertical;
