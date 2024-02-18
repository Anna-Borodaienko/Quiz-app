import { useNavigate } from "react-router-dom";
import { submitGender } from "../../api/gender";
import OptionCardVertical from "../../components/Cards/OptionCardVertical";
import Header from "../../components/Header";
import TitleSection from "../../components/TitleSection";
import Motion from "../../styles/Motion";
import { OptionsContainer } from "../../styles/OptionsContainer";
import { PageContainerNoButton } from "../../styles/PageContainerNoButton";
import { getCurrentPage } from "../../utils/getCurrentPage";
import { Pages } from "../../constants/pages";

const GenderPage: React.FC = () => {

  const navigate = useNavigate();

  const currentPage = getCurrentPage();
  
  const onChooseGender = (option: string): void => {
    submitGender(option);
    navigate(`${Pages.QUIZ}/${currentPage + 1}`);
  }

  return (
    <Motion>
        <PageContainerNoButton>
        <Header />
        <TitleSection title="What gender do you identify with?"subtitle="Please share how do you identify yourself" />
        <OptionsContainer direction="row">
          <OptionCardVertical option="Female" handleChoose={onChooseGender}></OptionCardVertical>
          <OptionCardVertical option="Male" handleChoose={onChooseGender}></OptionCardVertical>
          <OptionCardVertical option="Other" handleChoose={onChooseGender}></OptionCardVertical>
        </OptionsContainer>
      </PageContainerNoButton>
    </Motion>
  )
}

export default GenderPage;
