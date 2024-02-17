import { useTranslation } from "react-i18next";
import { Title, Subtitle } from "./TitleSection.styled";

interface TitleSectionProps {
  title: string;
  subtitle?: string;
}

const TitleSection:React.FC<TitleSectionProps> = ({ title, subtitle }: TitleSectionProps) => {

  const { t } = useTranslation();

  return (
    <>
      <Title>{t(title)}</Title>
      {subtitle && <Subtitle>{t(subtitle)}</Subtitle>}
    </>
  )
}

export default TitleSection;
