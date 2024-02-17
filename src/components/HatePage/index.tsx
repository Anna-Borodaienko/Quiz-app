import { Link } from "react-router-dom";
import { getHate, submitHate } from "../../api/answers";
import { useState } from "react";
import Header from "../Header";
import TitleSection from "../TitleSection";
import { OptionsContainer } from "../../styles/OptionsContainer";
import OptionCardCheckbox from "../OptionCardCheckbox";
import ButtonNext from "../Button";

interface HatePageProps {
  totalNr: number;
  currentNr: number;
  changeQuestion: (number: number) => void;
}

const HatePage: React.FC<HatePageProps> = ({ totalNr, currentNr, changeQuestion }: HatePageProps) => {
  const [hates, setHates] = useState<string[]>(getHate());

  const onHandleTheme = (option: string, selected: boolean) => {
    if (selected) {
      setHates([...hates, option]);
    } else setHates(hates.filter(hate => hate !== option));
  };

  const isSelected = (option: string) => {
    return hates.includes(option);
  };

  const onSubmitHate = (): void => {
    submitHate(hates);
    changeQuestion(currentNr + 1);
  }

  return (
    <>
      <Header totalNr={totalNr} currentNr={currentNr} changeQuestion={changeQuestion} />
      <TitleSection title={"What do you hate the most in a book?"} />
      <OptionsContainer>
        <OptionCardCheckbox option={"Lack of logic"} handleSelect={onHandleTheme} selected={isSelected("Lack of logic")}></OptionCardCheckbox>
        <OptionCardCheckbox option={"A slow speed"} handleSelect={onHandleTheme} selected={isSelected("A slow speed")}></OptionCardCheckbox>
        <OptionCardCheckbox option={"Lack of humor"} handleSelect={onHandleTheme} selected={isSelected("Lack of humor")}></OptionCardCheckbox>
        <OptionCardCheckbox option={"Way too generic ending"} handleSelect={onHandleTheme} selected={isSelected("Way too generic ending")}></OptionCardCheckbox>
      </OptionsContainer>
      <Link to={`/quiz/${currentNr + 1}`}>
        <ButtonNext onClick={onSubmitHate} disabled={hates.length === 0} title={"Next"} />
      </Link>
    </>
  )
}

export default HatePage;
