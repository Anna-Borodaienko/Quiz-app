import { useNavigate } from "react-router-dom";
import { submitAge } from "../../api/age";
import OptionCard from "../../components/Cards/OptionCard";
import Header from "../../components/Header";
import TitleSection from "../../components/TitleSection";
import Motion from "../../styles/Motion";
import { OptionsContainer } from "../../styles/OptionsContainer";
import { PageContainerNoButton } from "../../styles/PageContainerNoButton";
import { getCurrentPage } from "../../utils/getCurrentPage";
import { Pages } from "../../constants/pages";

const AgePage: React.FC = () => {

  const navigate = useNavigate();

  const currentPagePage = getCurrentPage();

  const onChooseAge = (option: string): void => {
    submitAge(option);
    navigate(`${Pages.QUIZ}/${currentPagePage + 1}`);
  }

  return (
    <Motion>
      <PageContainerNoButton>
        <Header />
        <TitleSection title="What is your age?" />
          <OptionsContainer>
            <OptionCard option="18-29 years" handleChoose={onChooseAge}></OptionCard>
            <OptionCard option="30-39 years" handleChoose={onChooseAge}></OptionCard>
            <OptionCard option="40-49 years" handleChoose={onChooseAge}></OptionCard>
            <OptionCard option="50+" handleChoose={onChooseAge}></OptionCard>
          </OptionsContainer>
      </PageContainerNoButton>
    </Motion>
  )
}

export default AgePage;
