import { Link } from "react-router-dom";
import { clearAll } from "../../api/answers";
import Header from "../Header";
import { Container, Icon, IconWrapper, StyledText, StyledTitle } from "./FinishPage.styled";
import Button from "../Button";
import finish from '../../images/finish.svg';
import DownloadButton from "../DownloadButton";
import { PageContainerWithButton } from "../../styles/PageContainerWithButton";

const FinishPage:React.FC = () => {

  const onRetake = () => {
    clearAll();
  }

  return (
    <PageContainerWithButton>
      <Container>
        <Header />
        <StyledTitle>Thank you</StyledTitle>
        <StyledText>for supporting us and passing quiz</StyledText>
        <IconWrapper>
          <Icon src={finish} alt={"Done"} />
        </IconWrapper>
      </Container>
      <Container>
        <DownloadButton />
        <Link to="/quiz/1">
          <Button onClick={onRetake} title={"Retake quiz"} />
        </Link>
      </Container>
    </PageContainerWithButton>
  )
}

export default FinishPage;
