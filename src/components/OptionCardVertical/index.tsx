import { Icon, IconWrapper, StyledButton, StyledOption } from "./OptionCardVertical.styled";
import female from '../../images/female.png';
import male from '../../images/male.png';
import other from '../../images/other.png';
import { useTranslation } from "react-i18next";

interface OptionCardVerticalProps {
  option: string;
  handleChoose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface TranslationMap {
  [key: string]: {
    [language: string]: string;
  };
}

const OptionCardVertical:React.FC<OptionCardVerticalProps> = ({ option, handleChoose }: OptionCardVerticalProps) => {

  const { t } = useTranslation();
  
  const translations: TranslationMap = {
    "Female": {
      "English": t('Female'),
      "Spanish": t('Female', { lng: 'es' }),
      "French": t('Female', { lng: 'fr' }),
      "German": t('Female', { lng: 'de' }),
    },
    "Male": {
      "English": t('Male'),
      "Spanish": t('Male', { lng: 'es' }),
      "French": t('Male', { lng: 'fr' }),
      "German": t('Male', { lng: 'de' }),
    },
    "Other": {
      "English": t('Other'),
      "Spanish": t('Other', { lng: 'es' }),
      "French": t('Other', { lng: 'fr' }),
      "German": t('Other', { lng: 'de' }),
    },
  };

  const image: Map<string, string> = new Map();
  
  for (const key in translations) {
    for (const lang in translations[key]) {
      image.set(translations[key][lang], key === "Female" ? female : key === "Male" ? male : other);
    }
  }

  const imagePath = image.get(option);

  return (
    <StyledButton onClick={handleChoose}>
      <IconWrapper>
        <Icon src={imagePath} alt={option} />
      </IconWrapper>
      <StyledOption>{option}</StyledOption>
    </StyledButton>
  );
};

export default OptionCardVertical;
