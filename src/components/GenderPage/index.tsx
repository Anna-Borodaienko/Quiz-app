import { Link } from "react-router-dom";
import { submitGender } from "../../api/answers";
import { useTranslation } from "react-i18next";
import Header from "../Header";
import TitleSection from "../TitleSection";
import { OptionsContainer } from "../../styles/OptionsContainer";
import OptionCardVertical from "../OptionCardVertical";
import { PageContainerNoButton } from "../../styles/PageContainerNoButton";

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
    <PageContainerNoButton>
      <Header totalNr={totalNr} currentNr={currentNr} changeQuestion={changeQuestion} />
      <TitleSection title={t("What gender do you identify with?")} subtitle={"Please share how do you identify yourself"} />
      <Link to={`/quiz/${currentNr + 1}`}>
        <OptionsContainer direction="row">
          <OptionCardVertical option={"Female"} handleChoose={onChooseGender}></OptionCardVertical>
          <OptionCardVertical option={"Male"} handleChoose={onChooseGender}></OptionCardVertical>
          <OptionCardVertical option={"Other"} handleChoose={onChooseGender}></OptionCardVertical>
        </OptionsContainer>
      </Link>
    </PageContainerNoButton>
  )
}

export default GenderPage;
