import { Link } from "react-router-dom";
import { submitLocale } from "../../../api/answers";
import { useTranslation } from "react-i18next";
import Header from "../../Header";
import { Languages } from "../../../i18n/constants";
import TitleSection from "../../TitleSection";
import { OptionsContainer } from "../../../styles/OptionsContainer";
import OptionCard from "../../OptionCard";
import { PageContainerNoButton } from "../../../styles/PageContainerNoButton";
import Motion from "../../../styles/Motion";

interface MainPageProps {
  totalNr: number;
  currentNr: number;
  changeQuestion: (number: number) => void;
}

const MainPage: React.FC<MainPageProps> = ({ totalNr, currentNr, changeQuestion }: MainPageProps) => {
  
  const { i18n, t } = useTranslation();

  const onChooseLang = (e: React.MouseEvent<HTMLButtonElement>): void => {
    submitLocale(e.currentTarget.innerText);
    changeQuestion(currentNr + 1);
    i18n.changeLanguage((Languages as any)[e.currentTarget.innerText]);
  }

  return (
    <Motion>
      <PageContainerNoButton>
        <Header totalNr={totalNr} currentNr={currentNr} changeQuestion={changeQuestion} />
        <TitleSection title="What is your preferred language?" subtitle="Choose language" />
        <Link to={`/quiz/${currentNr + 1}`}>
          <OptionsContainer>
            <OptionCard option={"English"} handleChoose={onChooseLang} height={"small"}></OptionCard>
            <OptionCard option={"French"} handleChoose={onChooseLang} height={"small"}></OptionCard>
            <OptionCard option={"German"} handleChoose={onChooseLang} height={"small"}></OptionCard>
            <OptionCard option={"Spanish"} handleChoose={onChooseLang} height={"small"}></OptionCard>
          </OptionsContainer>
        </Link>
      </PageContainerNoButton>
    </Motion>
    
  )
}

export default MainPage;