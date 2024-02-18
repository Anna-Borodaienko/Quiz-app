import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { submitLocale } from '../../api/locale';
import OptionCard from '../../components/Cards/OptionCard';
import Header from '../../components/Header';
import TitleSection from '../../components/TitleSection';
import { Languages } from '../../i18n/constants';
import Motion from '../../styles/Motion';
import { OptionsContainer } from '../../styles/OptionsContainer';
import { PageContainerNoButton } from '../../styles/PageContainerNoButton';
import { getCurrentPage } from '../../utils/getCurrentPage';
import { Pages } from '../../constants/pages';

const MainPage: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const currentPage = getCurrentPage();

  const onChooseLang = (option: string): void => {
    submitLocale(Languages[option]);
    i18n.changeLanguage(Languages[option]);
    navigate(`${Pages.QUIZ}/${currentPage + 1}`);
  };

  return (
    <Motion>
      <PageContainerNoButton>
        <Header />
        <TitleSection
          title="What is your preferred language?"
          subtitle="Choose language"
        />
        <OptionsContainer>
          <OptionCard
            option="English"
            handleChoose={onChooseLang}
            height={'small'}></OptionCard>
          <OptionCard
            option="French"
            handleChoose={onChooseLang}
            height={'small'}></OptionCard>
          <OptionCard
            option="German"
            handleChoose={onChooseLang}
            height={'small'}></OptionCard>
          <OptionCard
            option="Spanish"
            handleChoose={onChooseLang}
            height={'small'}></OptionCard>
        </OptionsContainer>
      </PageContainerNoButton>
    </Motion>
  );
};

export default MainPage;
