import { Link } from "react-router-dom";
import { getHate, submitHate } from "../../../api/answers";
import { useState } from "react";
import Header from "../../Header";
import TitleSection from "../../TitleSection";
import { OptionsContainer } from "../../../styles/OptionsContainer";
import OptionCardCheckbox from "../../OptionCardCheckbox";
import ButtonNext from "../../Button";
import { PageContainerWithButton } from "../../../styles/PageContainerWithButton";
import { useTranslation } from "react-i18next";
import Motion from "../../../styles/Motion";

interface HatePageProps {
  totalNr: number;
  currentNr: number;
  changeQuestion: (number: number) => void;
}

const HatePage: React.FC<HatePageProps> = ({ totalNr, currentNr, changeQuestion }: HatePageProps) => {
  const [hates, setHates] = useState<string[]>(getHate());

  const { t } = useTranslation();

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
    <Motion>
      <PageContainerWithButton>
        <div>
          <Header totalNr={totalNr} currentNr={currentNr} changeQuestion={changeQuestion} />
          <TitleSection title={t("What do you hate the most in a book?")} />
          <OptionsContainer>
            <OptionCardCheckbox option={t("Lack of logic")} handleSelect={onHandleTheme} selected={isSelected(t("Lack of logic"))}></OptionCardCheckbox>
            <OptionCardCheckbox option={t("A slow speed")} handleSelect={onHandleTheme} selected={isSelected(t("A slow speed"))}></OptionCardCheckbox>
            <OptionCardCheckbox option={t("Lack of humor")} handleSelect={onHandleTheme} selected={isSelected(t("Lack of humor"))}></OptionCardCheckbox>
            <OptionCardCheckbox option={t("Way too generic ending")} handleSelect={onHandleTheme} selected={isSelected(t("Way too generic ending"))}></OptionCardCheckbox>
          </OptionsContainer>
        </div>
        <div>
          <Link to={`/quiz/${currentNr + 1}`}>
            <ButtonNext onClick={onSubmitHate} disabled={hates.length === 0} title={t("Next")} />
          </Link>
        </div>
      </PageContainerWithButton>
    </Motion>
  )
}

export default HatePage;
