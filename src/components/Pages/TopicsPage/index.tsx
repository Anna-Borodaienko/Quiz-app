import { useState } from "react";
import { getTopic, submitTopic } from "../../../api/answers";
import { Link } from "react-router-dom";
import Header from "../../Header";
import TitleSection from "../../TitleSection";
import { OptionsContainer } from "../../../styles/OptionsContainer";
import OptionCardRound from "../../OptionCardRound";
import ButtonNext from "../../Button";
import { PageContainerWithButton } from "../../../styles/PageContainerWithButton";
import Motion from "../../../styles/Motion";

const TopicsPage: React.FC = () => {
  const [topics, setTopics] = useState<string[]>(getTopic());

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
  }

  return (
    <Motion>
      <PageContainerWithButton>
        <Header />
        <TitleSection title="What are your favorite topics?" subtitle="Choose up to 3 topics you like" />
        <OptionsContainer direction={"row"} wrap={"wrap"}>
          <OptionCardRound option="Werewolf" handleSelect={onHandleTheme} selected={isSelected("Werewolf")}></OptionCardRound>
          <OptionCardRound option="Action" handleSelect={onHandleTheme} selected={isSelected("Action")}></OptionCardRound>
          <OptionCardRound option="Romance" handleSelect={onHandleTheme} selected={isSelected("Romance")}></OptionCardRound>
          <OptionCardRound option="Young Adult" handleSelect={onHandleTheme} selected={isSelected("Young Adult")}></OptionCardRound>
          <OptionCardRound option="Bad Boy" handleSelect={onHandleTheme} selected={isSelected("Bad Boy")}></OptionCardRound>
          <OptionCardRound option="Royal Obsession" handleSelect={onHandleTheme} selected={isSelected("Royal Obsession")}></OptionCardRound>
          <OptionCardRound option="Billionaire" handleSelect={onHandleTheme} selected={isSelected("Billionaire")}></OptionCardRound>
        </OptionsContainer>
        <Link to="/loader">
          <ButtonNext onClick={onSubmitHate} disabled={topics.length === 0} title="Next" />
        </Link>
      </PageContainerWithButton>
    </Motion>
  );
};

export default TopicsPage;