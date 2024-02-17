import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBarRound from "../ProgressBarRound";
import { Container, StyledMessage, Wrapper } from "./LoadingPage.styled";
import { useTranslation } from "react-i18next";

const LoadingPage:React.FC = () => {

  const navigate = useNavigate();
  const { t } = useTranslation();
  
  useEffect(() => {
    setTimeout(() => {
      navigate(`/email`);
    }, 5000);
  }, [navigate]);

  return (
    <Wrapper>
      <Container>
        <ProgressBarRound />
        <StyledMessage>{t("Finding collection for you...")}</StyledMessage>
      </Container>
    </Wrapper>
  )
};

export default LoadingPage;
