import { Link } from "react-router-dom";
import { submitGender } from "../../api/answers";
import { useTranslation } from "react-i18next";
import Header from "../Header/Header";

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
    <>
    <Header totalNr={totalNr} currentNr={currentNr} changeQuestion={changeQuestion} />
    <div>{t("What gender do you identify with?")}</div>
    <div>Please share how do you identify yourself</div>
    <Link to={`/quiz/${currentNr + 1}`}>
      <button onClick={onChooseGender}>Female</button>
      <button onClick={onChooseGender}>Male</button>
      <button onClick={onChooseGender}>Other</button>
    </Link>
    
  </>
  )
}

export default GenderPage;
