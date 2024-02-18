import { useTranslation } from 'react-i18next';
import { StyledLink, StyledPlainText, Wrapper } from './PolicyMessage.styled';

const PolicyMessage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <StyledPlainText>{t('By continuing I agree with')}</StyledPlainText>{' '}
      <a
        href="https://react-tutorial.app/privacy.html"
        target="_blank"
        rel="noreferrer">
        <StyledLink>{t('Privacy policy')}</StyledLink>
      </a>{' '}
      <StyledPlainText>{t('and')}</StyledPlainText>{' '}
      <a
        href="https://react-tutorial.app/terms.html"
        target="_blank"
        rel="noreferrer">
        <StyledLink>{t('Terms of use.')}</StyledLink>
      </a>
    </Wrapper>
  );
};

export default PolicyMessage;
