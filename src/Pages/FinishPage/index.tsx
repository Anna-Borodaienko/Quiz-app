import { useNavigate } from 'react-router-dom';
import {
  Container,
  Icon,
  IconWrapper,
  StyledText,
  StyledTitle,
} from './FinishPage.styled';
import finish from '../../images/finish.svg';
import { useTranslation } from 'react-i18next';
import { clearAll } from '../../api/answers';
import Button from '../../components/Button';
import DownloadCSV from '../../components/DownloadCSV';
import Header from '../../components/Header';
import Motion from '../../styles/Motion';
import { PageContainerWithButton } from '../../styles/PageContainerWithButton';
import { Pages } from '../../constants/pages';

const FinishPage: React.FC = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const onRetake = () => {
    clearAll();
    i18n.changeLanguage('en');
    navigate(`${Pages.HOME}`);
  };

  return (
    <Motion>
      <PageContainerWithButton>
        <Container>
          <Header />
          <StyledTitle>{t('Thank you')}</StyledTitle>
          <StyledText>{t('for supporting us and passing quiz')}</StyledText>
          <IconWrapper>
            <Icon src={finish} alt={'Done'} />
          </IconWrapper>
        </Container>
        <Container>
          <DownloadCSV />
          <Button onClick={onRetake} title="Retake quiz" />
        </Container>
      </PageContainerWithButton>
    </Motion>
  );
};

export default FinishPage;
