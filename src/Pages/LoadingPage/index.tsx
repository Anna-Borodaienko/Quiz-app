import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, StyledMessage, Wrapper } from "./LoadingPage.styled";
import { useTranslation } from "react-i18next";
import Motion from "../../styles/Motion";
import Spinner from "../../components/Spinner";
import { Pages } from "../../constants/pages";

const LoadingPage: React.FC = () => {

  const navigate = useNavigate();
  const { t } = useTranslation();
  
  useEffect(() => {
    setTimeout(() => {
      navigate(`${Pages.EMAIL}`);
    }, 5000);
  }, [navigate]);

  return (
    <Motion>
      <Wrapper>
        <Container>
          <Spinner />
          <StyledMessage>{t("Finding collection for you...")}</StyledMessage>
        </Container>
      </Wrapper>
    </Motion>
  )
};

export default LoadingPage;
