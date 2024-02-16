import { StyledButton, StyledOption } from "./OptionCardCheckbox.styled";
import notSelected from '../../images/checkbox.svg';
import selected from '../../images/checkboxSelected.svg';

interface OptionCardCheckboxProps {
  option: string;
  handleSelect: (option: string, selected: boolean) => void;
  selected: boolean;
}

interface ImageMap {
  [key: string]: string;
}

const image: ImageMap = {
  "true": selected,
  "false": notSelected,
}

const OptionCardCheckbox:React.FC<OptionCardCheckboxProps> = ({ option, handleSelect, selected }: OptionCardCheckboxProps) => {

  const imagePath = selected ? image["true"] : image["false"];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleSelect(option, !selected);
  }

  return (
    <StyledButton onClick={handleClick} selected={selected}>
      <StyledOption>{option}</StyledOption>
      <img src={imagePath} alt="checkbox" />
    </StyledButton>
  );
};

export default OptionCardCheckbox;
