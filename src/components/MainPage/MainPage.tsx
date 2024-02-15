import { Link } from "react-router-dom";
import { setLocale } from "../../api/answers";
// import Header from "../Header/Header";

interface MainPageProps {
  currentNr: number;
  changeQuestion: (number: number) => void;
}

const MainPage: React.FC<MainPageProps> = ({ currentNr, changeQuestion }: MainPageProps) => {
  
  const onChooseLang = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setLocale(e.currentTarget.innerText);
    changeQuestion(currentNr + 1);
  }

  return (
    <>
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