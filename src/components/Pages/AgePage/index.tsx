import { Link } from "react-router-dom";
import { submitAge } from "../../../api/answers";
import Header from "../../Header";
import TitleSection from "../../TitleSection";
import { OptionsContainer } from "../../../styles/OptionsContainer";
import OptionCard from "../../OptionCard";
import { PageContainerNoButton } from "../../../styles/PageContainerNoButton";
import Motion from "../../../styles/Motion";

interface AgePageProps {
  totalNr: number;
  currentNr: number;
  changeQuestion: (number: number) => void;
}

const AgePage: React.FC<AgePageProps> = ({ totalNr, currentNr, changeQuestion }: AgePageProps) => {

  const onChooseAge = (e: React.MouseEvent<HTMLButtonElement>): void => {
    submitAge(e.currentTarget.innerText);
    changeQuestion(currentNr + 1);
  }

  return (
    <Motion>
      <PageContainerNoButton>
        <Header totalNr={totalNr} currentNr={currentNr} changeQuestion={changeQuestion} />
        <TitleSection title="What is your age?" />
        <Link to={`/quiz/${currentNr + 1}`}>
          <OptionsContainer>
              <OptionCard option="18-29 years" handleChoose={onChooseAge}></OptionCard>
              <OptionCard option="30-39 years" handleChoose={onChooseAge}></OptionCard>
              <OptionCard option="40-49 years" handleChoose={onChooseAge}></OptionCard>
              <OptionCard option="50+" handleChoose={onChooseAge}></OptionCard>
            </OptionsContainer>
        </Link>
      </PageContainerNoButton>
    </Motion>
  )
}

export default AgePage;
