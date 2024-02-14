import { setGender } from "../../api/answers";
import Header from "../Header/Header";

const GenderPage: React.FC = () => {

  const onChooseGender = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setGender(e.currentTarget.innerText);
  }

  return (
    <>
    <Header />
    <div>What gender do you identify with?</div>
    <div>Please share how do you identify yourself</div>
    <button onClick={onChooseGender}>Female</button>
    <button onClick={onChooseGender}>Male</button>
    <button onClick={onChooseGender}>Other</button>
  </>
  )
}

export default GenderPage;
