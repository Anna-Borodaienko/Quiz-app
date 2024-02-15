import { Link } from "react-router-dom";
import { submitGender } from "../../api/answers";
import Header from "../Header/Header";

interface AgePageProps {
  totalNr: number;
  currentNr: number;
  changeQuestion: (number: number) => void;
}

const AgePage: React.FC<AgePageProps> = ({ totalNr, currentNr, changeQuestion }: AgePageProps) => {

  const onChooseAge = (e: React.MouseEvent<HTMLButtonElement>): void => {
    submitGender(e.currentTarget.innerText);
    changeQuestion(currentNr + 1);
  }

  return (
    <>
    <Header totalNr={totalNr} currentNr={currentNr} changeQuestion={changeQuestion} />
    <div>What is your age?</div>
    <Link to={`/quiz/${currentNr + 1}`}>
      <button onClick={onChooseAge}>18-29</button>
      <button onClick={onChooseAge}>30-39</button>
      <button onClick={onChooseAge}>40-49</button>
      <button onClick={onChooseAge}>50+</button>
    </Link>
    
  </>
  )
}

export default AgePage;
