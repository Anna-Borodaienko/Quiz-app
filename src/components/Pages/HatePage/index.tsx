import { Link } from "react-router-dom";
import { getHate, submitHate } from "../../../api/answers";
import { useState } from "react";
import Header from "../../Header";
import TitleSection from "../../TitleSection";
import { OptionsContainer } from "../../../styles/OptionsContainer";
import OptionCardCheckbox from "../../OptionCardCheckbox";
import Button from "../../Button";
import { PageContainerWithButton } from "../../../styles/PageContainerWithButton";
import Motion from "../../../styles/Motion";
import { receiveCurrentPageNr } from "../../../utils/receiveCurrentPageNr";

const HatePage: React.FC = () => {
  const [hates, setHates] = useState<string[]>(getHate());

  const currentPageNr = receiveCurrentPageNr();

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
  }

  return (
    <Motion>
      <PageContainerWithButton>
        <div>
          <Header />
          <TitleSection title="What do you hate the most in a book?" />
          <OptionsContainer>
            <OptionCardCheckbox option="Lack of logic" handleSelect={onHandleTheme} selected={isSelected("Lack of logic")}></OptionCardCheckbox>
            <OptionCardCheckbox option="A slow speed" handleSelect={onHandleTheme} selected={isSelected("A slow speed")}></OptionCardCheckbox>
            <OptionCardCheckbox option="Lack of humor" handleSelect={onHandleTheme} selected={isSelected("Lack of humor")}></OptionCardCheckbox>
            <OptionCardCheckbox option="Way too generic ending" handleSelect={onHandleTheme} selected={isSelected("Way too generic ending")}></OptionCardCheckbox>
          </OptionsContainer>
        </div>
        <div>
          <Link to={`/quiz/${currentPageNr + 1}`}>
            <Button onClick={onSubmitHate} disabled={hates.length === 0} title="Next" />
          </Link>
        </div>
      </PageContainerWithButton>
    </Motion>
  )
}

export default HatePage;
