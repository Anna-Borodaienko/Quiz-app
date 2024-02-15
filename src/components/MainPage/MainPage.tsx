import { Link } from "react-router-dom";
import { submitLocale } from "../../api/answers";
import { useTranslation } from "react-i18next";
import Header from "../Header/Header";
import { Languages } from "../../i18n/constants";

interface MainPageProps {
  totalNr: number;
  currentNr: number;
  changeQuestion: (number: number) => void;
}

const MainPage: React.FC<MainPageProps> = ({ totalNr, currentNr, changeQuestion }: MainPageProps) => {
  
  const { i18n } = useTranslation();

  const onChooseLang = (e: React.MouseEvent<HTMLButtonElement>): void => {
    submitLocale(e.currentTarget.innerText);
    changeQuestion(currentNr + 1);
    i18n.changeLanguage((Languages as any)[e.currentTarget.innerText]);
  }

  return (
    <>
      <Header totalNr={totalNr} currentNr={currentNr} changeQuestion={changeQuestion} />
      <div>What is your preferred language?</div>
      <div>Choose language</div>
      <Link to={`/quiz/${currentNr + 1}`}>
        <button onClick={onChooseLang}>English</button>
        <button onClick={onChooseLang}>French</button>
        <button onClick={onChooseLang}>German</button>
        <button onClick={onChooseLang}>Spanish</button>
      </Link>
    </>
  )
}

export default MainPage;