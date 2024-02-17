import { Link } from "react-router-dom";
import { submitGender } from "../../../api/answers";
import Header from "../../Header";
import TitleSection from "../../TitleSection";
import { OptionsContainer } from "../../../styles/OptionsContainer";
import OptionCardVertical from "../../OptionCardVertical";
import { PageContainerNoButton } from "../../../styles/PageContainerNoButton";
import Motion from "../../../styles/Motion";
import { receiveCurrentPageNr } from "../../../utils/receiveCurrentPageNr";

const GenderPage: React.FC = () => {

  const currentPageNr = receiveCurrentPageNr();
  
  const onChooseGender = (option: string): void => {
    submitGender(option);
  }

  return (
    <Motion>
        <PageContainerNoButton>
        <Header />
        <TitleSection title="What gender do you identify with?"subtitle="Please share how do you identify yourself" />
        <Link to={`/quiz/${currentPageNr + 1}`}>
          <OptionsContainer direction="row">
            <OptionCardVertical option="Female" handleChoose={onChooseGender}></OptionCardVertical>
            <OptionCardVertical option="Male" handleChoose={onChooseGender}></OptionCardVertical>
            <OptionCardVertical option="Other" handleChoose={onChooseGender}></OptionCardVertical>
          </OptionsContainer>
        </Link>
      </PageContainerNoButton>
    </Motion>
  )
}

export default GenderPage;
