import { Link } from "react-router-dom";
import { submitGender } from "../../../api/answers";
import { useTranslation } from "react-i18next";
import Header from "../../Header";
import TitleSection from "../../TitleSection";
import { OptionsContainer } from "../../../styles/OptionsContainer";
import OptionCardVertical from "../../OptionCardVertical";
import { PageContainerNoButton } from "../../../styles/PageContainerNoButton";
import Motion from "../../../styles/Motion";

interface GenderPageProps {
  totalNr: number;
  currentNr: number;
  changeQuestion: (number: number) => void;
}

const GenderPage: React.FC<GenderPageProps> = ({ totalNr, currentNr, changeQuestion }: GenderPageProps) => {

  const { t } = useTranslation();

  const onChooseGender = (e: React.MouseEvent<HTMLButtonElement>): void => {
    submitGender(e.currentTarget.innerText);
    changeQuestion(currentNr + 1);
  }

  return (
    <Motion>
        <PageContainerNoButton>
        <Header totalNr={totalNr} currentNr={currentNr} changeQuestion={changeQuestion} />
        <TitleSection title={t("What gender do you identify with?")} subtitle={t("Please share how do you identify yourself")} />
        <Link to={`/quiz/${currentNr + 1}`}>
          <OptionsContainer direction="row">
            <OptionCardVertical option={t("Female")} handleChoose={onChooseGender}></OptionCardVertical>
            <OptionCardVertical option={t("Male")} handleChoose={onChooseGender}></OptionCardVertical>
            <OptionCardVertical option={t("Other")} handleChoose={onChooseGender}></OptionCardVertical>
          </OptionsContainer>
        </Link>
      </PageContainerNoButton>
    </Motion>
  )
}

export default GenderPage;
