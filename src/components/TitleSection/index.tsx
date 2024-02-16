import { Title, Subtitle } from "./TitleSection.styled";

interface TitleSectionProps {
  title: string;
  subtitle?: string;
}

const TitleSection:React.FC<TitleSectionProps> = ({ title, subtitle }: TitleSectionProps) => {
  return (
    <>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </>
  )
}

export default TitleSection;
