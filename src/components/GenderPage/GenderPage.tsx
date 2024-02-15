import { Link } from "react-router-dom";
import { setGender } from "../../api/answers";

interface GenderPageProps {
  currentNr: number;
  changeQuestion: (number: number) => void;
}

const GenderPage: React.FC<GenderPageProps> = ({ currentNr, changeQuestion }: GenderPageProps) => {

  const onChooseGender = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setGender(e.currentTarget.innerText);
    changeQuestion(currentNr + 1);
  }

  return (
    <>
    <div>What gender do you identify with?</div>
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
