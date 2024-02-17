import { Icon, IconWrapper, StyledButton, StyledOption } from "./OptionCardRound.styled";
import werewolf from '../../images/werewolf.png';
import action from '../../images/action.png';
import romance from '../../images/romance.png';
import young from '../../images/young adult.png';
import boy from '../../images/bad boy.png';
import royal from '../../images/royal obsession.png';
import billionaire from '../../images/billionaire.png';
import { useTranslation } from "react-i18next";

interface OptionCardRoundProps {
  option: string;
  handleSelect: (option: string, selected: boolean) => void;
  selected: boolean;
}

interface TranslationMap {
  [key: string]: {
    [language: string]: string;
  };
}

const OptionCardRound:React.FC<OptionCardRoundProps> = ({ option, handleSelect, selected }: OptionCardRoundProps) => {

  const { t } = useTranslation();

  const translationsForIcons: TranslationMap = {
    "Werewolf": {
      "English": t('Werewolf'),
      "Spanish": t('Werewolf', { lng: 'es' }),
      "French": t('Werewolf', { lng: 'fr' }),
      "German": t('Werewolf', { lng: 'de' }),
    },
    "Action": {
      "English": t('Action'),
      "Spanish": t('Action', { lng: 'es' }),
      "French": t('Action', { lng: 'fr' }),
      "German": t('Action', { lng: 'de' }),
    },
    "Romance": {
      "English": t('Romance'),
      "Spanish": t('Romance', { lng: 'es' }),
      "French": t('Romance', { lng: 'fr' }),
      "German": t('Romance', { lng: 'de' }),
    },
    "Young Adult": {
      "English": t('Young Adult'),
      "Spanish": t('Young Adult', { lng: 'es' }),
      "French": t('Young Adult', { lng: 'fr' }),
      "German": t('Young Adult', { lng: 'de' }),
    },
    "Bad Boy": {
      "English": t('Bad Boy'),
      "Spanish": t('Bad Boy', { lng: 'es' }),
      "French": t('Bad Boy', { lng: 'fr' }),
      "German": t('Bad Boy', { lng: 'de' }),
    },
    "Royal Obsession": {
      "English": t('Royal Obsession'),
      "Spanish": t('Royal Obsession', { lng: 'es' }),
      "French": t('Royal Obsession', { lng: 'fr' }),
      "German": t('Royal Obsession', { lng: 'de' }),
    },
    "Billionaire": {
      "English": t('Billionaire'),
      "Spanish": t('Billionaire', { lng: 'es' }),
      "French": t('Billionaire', { lng: 'fr' }),
      "German": t('Billionaire', { lng: 'de' }),
    },
  };
  
  const imageForIcons: Map<string, string> = new Map();
  
  for (const key in translationsForIcons) {
    for (const lang in translationsForIcons[key]) {
      imageForIcons.set(translationsForIcons[key][lang], key === "Werewolf" ? werewolf : key === "Action" ? action : key === "Romance" ? romance : key === "Young Adult" ? young : key === "Bad Boy" ? boy : key === "Royal Obsession" ? royal : billionaire);
    }
  }
  

  const imagePath = imageForIcons.get(option);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleSelect(option, !selected);
  }

  return (
    <StyledButton onClick={handleClick} selected={selected}>
      <IconWrapper>
        <Icon src={imagePath} alt="icon" />
      </IconWrapper>
      <StyledOption>{option}</StyledOption>
    </StyledButton>
  );
};

export default OptionCardRound;
