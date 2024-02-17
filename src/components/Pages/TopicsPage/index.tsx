import { useState } from "react";
import { getTopic, submitTopic } from "../../../api/answers";
import { Link } from "react-router-dom";
import Header from "../../Header";
import TitleSection from "../../TitleSection";
import { OptionsContainer } from "../../../styles/OptionsContainer";
import OptionCardRound from "../../OptionCardRound";
import ButtonNext from "../../Button";
import { PageContainerWithButton } from "../../../styles/PageContainerWithButton";
import { useTranslation } from "react-i18next";
import Motion from "../../../styles/Motion";

interface TopicsPageProps {
  totalNr: number;
  currentNr: number;
  changeQuestion: (number: number) => void;
}

const TopicsPage: React.FC<TopicsPageProps> = ( { totalNr, currentNr, changeQuestion }: TopicsPageProps) => {
  const [topics, setTopics] = useState<string[]>(getTopic());

  const { t } = useTranslation();
  
  const onHandleTheme = (option: string, selected: boolean) => {
    if (!selected) {
      setTopics(topics.filter(topic => topic !== option)) ;
    } else if (topics.length < 3) {
      setTopics([...topics, option]);
    }
  };

  const isSelected = (option: string) => {
    return topics.includes(option);
  };

  const onSubmitHate = (): void => {
    submitTopic(topics);
    changeQuestion(currentNr + 1);
  }

  return (
    <Motion>
      <PageContainerWithButton>
        <Header totalNr={totalNr} currentNr={currentNr} changeQuestion={changeQuestion} />
        <TitleSection title={t("What are your favorite topics?")} subtitle={t("Choose up to 3 topics you like")} />
        <OptionsContainer direction={"row"} wrap={"wrap"}>
          <OptionCardRound option={t("Werewolf")} handleSelect={onHandleTheme} selected={isSelected(t("Werewolf"))}></OptionCardRound>
          <OptionCardRound option={t("Action")} handleSelect={onHandleTheme} selected={isSelected(t("Action"))}></OptionCardRound>
          <OptionCardRound option={t("Romance")} handleSelect={onHandleTheme} selected={isSelected(t("Romance"))}></OptionCardRound>
          <OptionCardRound option={t("Young Adult")} handleSelect={onHandleTheme} selected={isSelected(t("Young Adult"))}></OptionCardRound>
          <OptionCardRound option={t("Bad Boy")} handleSelect={onHandleTheme} selected={isSelected(t("Bad Boy"))}></OptionCardRound>
          <OptionCardRound option={t("Royal Obsession")} handleSelect={onHandleTheme} selected={isSelected(t("Royal Obsession"))}></OptionCardRound>
          <OptionCardRound option={t("Billionaire")} handleSelect={onHandleTheme} selected={isSelected(t("Billionaire"))}></OptionCardRound>
        </OptionsContainer>
        <Link to="/loader">
          <ButtonNext onClick={onSubmitHate} disabled={topics.length === 0} title={t("Next")} />
        </Link>
      </PageContainerWithButton>
    </Motion>
  );
};

export default TopicsPage;