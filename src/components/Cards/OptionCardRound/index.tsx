import { Icon, IconWrapper, StyledButton, StyledOption } from "./OptionCardRound.styled";
import werewolf from '../../../images/werewolf.png';
import action from '../../../images/action.png';
import romance from '../../../images/romance.png';
import young from '../../../images/young adult.png';
import boy from '../../../images/bad boy.png';
import royal from '../../../images/royal obsession.png';
import billionaire from '../../../images/billionaire.png';
import { useTranslation } from "react-i18next";
import { ImageMap } from "../../../types/questions";

interface OptionCardRoundProps {
  option: string;
  handleSelect: (option: string, selected: boolean) => void;
  selected: boolean;
}

const image: ImageMap = {
  "Werewolf": werewolf,
  "Action": action,
  "Romance": romance,
  "Young Adult": young,
  "Bad Boy": boy,
  "Royal Obsession": royal,
  "Billionaire": billionaire
}

const OptionCardRound:React.FC<OptionCardRoundProps> = ({ option, handleSelect, selected }: OptionCardRoundProps) => {

  const { t } = useTranslation();
  
  const imagePath = image[option];

  const handleClick = () => {
    handleSelect(option, !selected);
  }

  return (
    <StyledButton onClick={handleClick} selected={selected}>
      <IconWrapper>
        <Icon src={imagePath} alt="icon" />
      </IconWrapper>
      <StyledOption>{t(option)}</StyledOption>
    </StyledButton>
  );
};

export default OptionCardRound;
