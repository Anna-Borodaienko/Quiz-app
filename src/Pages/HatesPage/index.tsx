import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getHates, submitHates } from "../../api/hates";
import Button from "../../components/Button";
import OptionCardCheckbox from "../../components/Cards/OptionCardCheckbox";
import Header from "../../components/Header";
import TitleSection from "../../components/TitleSection";
import Motion from "../../styles/Motion";
import { OptionsContainer } from "../../styles/OptionsContainer";
import { PageContainerWithButton } from "../../styles/PageContainerWithButton";
import { getCurrentPage } from "../../utils/getCurrentPage";
import { Pages } from "../../constants/pages";

const HatesPage: React.FC = () => {
  const [hates, setHates] = useState<string[]>(getHates());

  const navigate = useNavigate();

  const currentPage = getCurrentPage();

  const onHandleTheme = (option: string, selected: boolean) => {
    if (selected) {
      setHates([...hates, option]);
    } else setHates(hates.filter(hate => hate !== option));
  };

  const isSelected = (option: string) => {
    return hates.includes(option);
  };

  const onSubmitHate = (): void => {
    submitHates(hates);
    navigate(`${Pages.QUIZ}/${currentPage + 1}`);
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
          <Button onClick={onSubmitHate} disabled={hates.length === 0} title="Next" />
        </div>
      </PageContainerWithButton>
    </Motion>
  )
}

export default HatesPage;
