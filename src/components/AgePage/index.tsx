import { Link } from "react-router-dom";
import { submitAge } from "../../api/answers";
import Header from "../Header";
import TitleSection from "../TitleSection";
import { OptionsContainer } from "../../styles/OptionsContainer";
import OptionCard from "../OptionCard";
import { PageContainerNoButton } from "../../styles/PageContainerNoButton";
import { useTranslation } from "react-i18next";

interface AgePageProps {
  totalNr: number;
  currentNr: number;
  changeQuestion: (number: number) => void;
}

const AgePage: React.FC<AgePageProps> = ({ totalNr, currentNr, changeQuestion }: AgePageProps) => {

  const { t } = useTranslation();

  const onChooseAge = (e: React.MouseEvent<HTMLButtonElement>): void => {
    submitAge(e.currentTarget.innerText);
    changeQuestion(currentNr + 1);
  }

  return (
    <PageContainerNoButton>
      <Header totalNr={totalNr} currentNr={currentNr} changeQuestion={changeQuestion} />
      <TitleSection title={t("What is your age?")} />
      <Link to={`/quiz/${currentNr + 1}`}>
        <OptionsContainer>
            <OptionCard option={t("18-29 years")} handleChoose={onChooseAge}></OptionCard>
            <OptionCard option={t("30-39 years")} handleChoose={onChooseAge}></OptionCard>
            <OptionCard option={t("40-49 years")} handleChoose={onChooseAge}></OptionCard>
            <OptionCard option={"50+"} handleChoose={onChooseAge}></OptionCard>
          </OptionsContainer>
      </Link>
    </PageContainerNoButton>
  )
}

export default AgePage;
