import { Link } from "react-router-dom";
import { submitAge } from "../../../api/answers";
import Header from "../../Header";
import TitleSection from "../../TitleSection";
import { OptionsContainer } from "../../../styles/OptionsContainer";
import OptionCard from "../../OptionCard";
import { PageContainerNoButton } from "../../../styles/PageContainerNoButton";
import Motion from "../../../styles/Motion";
import { receiveCurrentPageNr } from "../../../utils/receiveCurrentPageNr";

const AgePage: React.FC = () => {

  const currentPageNr = receiveCurrentPageNr();

  const onChooseAge = (option: string): void => {
    submitAge(option);
  }

  return (
    <Motion>
      <PageContainerNoButton>
        <Header />
        <TitleSection title="What is your age?" />
        <Link to={`/quiz/${currentPageNr + 1}`}>
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
