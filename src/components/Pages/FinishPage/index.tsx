import { Link } from "react-router-dom";
import { clearAll } from "../../../api/answers";
import Header from "../../Header";
import { Container, Icon, IconWrapper, StyledText, StyledTitle } from "./FinishPage.styled";
import Button from "../../Button";
import finish from '../../../images/finish.svg';
import DownloadButton from "../../DownloadButton";
import { PageContainerWithButton } from "../../../styles/PageContainerWithButton";
import { useTranslation } from "react-i18next";
import Motion from "../../../styles/Motion";

const FinishPage:React.FC = () => {

  const { i18n, t } = useTranslation();

  const onRetake = () => {
    clearAll();
    i18n.changeLanguage('en');
  }

  return (
    <Motion>
      <PageContainerWithButton>
        <Container>
          <Header />
          <StyledTitle>{t("Thank you")}</StyledTitle>
          <StyledText>{t("for supporting us and passing quiz")}</StyledText>
          <IconWrapper>
            <Icon src={finish} alt={"Done"} />
          </IconWrapper>
        </Container>
        <Container>
          <DownloadButton />
          <Link to="/quiz/1">
            <Button onClick={onRetake} title="Retake quiz" />
          </Link>
        </Container>
      </PageContainerWithButton>
    </Motion>
  )
}

export default FinishPage;
