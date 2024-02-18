import { StyledButton, StyledOption } from "./OptionCardCheckbox.styled";
import notSelected from '../../../images/checkbox.svg';
import selected from '../../../images/checkboxSelected.svg';
import { useTranslation } from "react-i18next";
import { ImageMap } from "../../../types/questions";

interface OptionCardCheckboxProps {
  option: string;
  handleSelect: (option: string, selected: boolean) => void;
  selected: boolean;
}

const image: ImageMap = {
  "true": selected,
  "false": notSelected,
}

const OptionCardCheckbox:React.FC<OptionCardCheckboxProps> = ({ option, handleSelect, selected }: OptionCardCheckboxProps) => {

  const { t } = useTranslation();

  const imagePath = selected ? image["true"] : image["false"];

  const handleClick = () => {
    handleSelect(option, !selected);
  }

  return (
    <StyledButton onClick={handleClick} selected={selected}>
      <StyledOption>{t(option)}</StyledOption>
      <img src={imagePath} alt="checkbox" />
    </StyledButton>
  );
};

export default OptionCardCheckbox;
