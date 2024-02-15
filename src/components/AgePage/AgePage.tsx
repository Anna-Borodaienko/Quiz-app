import { Link } from "react-router-dom";
import { setGender } from "../../api/answers";

interface AgePageProps {
  currentNr: number;
  changeQuestion: (number: number) => void;
}

const AgePage: React.FC<AgePageProps> = ({ currentNr, changeQuestion }: AgePageProps) => {

  const onChooseAge = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setGender(e.currentTarget.innerText);
    changeQuestion(currentNr + 1);
  }

  return (
    <>
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
