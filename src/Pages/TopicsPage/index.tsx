import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSelectedTopics, submitTopics } from "../../api/topics";
import OptionCardRound from "../../components/Cards/OptionCardRound";
import Header from "../../components/Header";
import TitleSection from "../../components/TitleSection";
import Motion from "../../styles/Motion";
import { OptionsContainer } from "../../styles/OptionsContainer";
import { PageContainerWithButton } from "../../styles/PageContainerWithButton";
import Button from "../../components/Button";
import { Pages } from "../../constants/pages";
import { getVisibleTopics } from "../../api/dataWithParams";

const TopicsPage: React.FC = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>(getSelectedTopics());
  const [visibleTopics] = useState<string[]>(getVisibleTopics());


  const navigate = useNavigate();

  const onHandleTheme = (option: string, selected: boolean) => {
    const checkedSelectedTopics = checkSelectedTopics();
    if (!selected) {
      setSelectedTopics(selectedTopics.filter(topic => topic !== option)) ;
    } else if (checkedSelectedTopics.length < 3) {
      setSelectedTopics([...selectedTopics, option]);
    }
  };

  const isSelected = (option: string) => {
    return selectedTopics.includes(option);
  };

  const onSubmitHate = (): void => {
    const checkedSelectedTopics = checkSelectedTopics();
    submitTopics(checkedSelectedTopics);
    navigate(`${Pages.LOADER}`);
  };

  const checkSelectedTopics = () => selectedTopics.filter(hate => visibleTopics.includes(hate));

  return (
    <Motion>
      <PageContainerWithButton>
        <Header />
        <TitleSection title="What are your favorite topics?" subtitle="Choose up to 3 topics you like" />
        <OptionsContainer direction={"row"} wrap={"wrap"}>
          {visibleTopics.map(topic => (
            <OptionCardRound key={topic} option={topic} handleSelect={onHandleTheme} selected={isSelected(topic)}></OptionCardRound>
          ))}
        </OptionsContainer>
        <Button onClick={onSubmitHate} disabled={selectedTopics.length === 0} title="Next" />
      </PageContainerWithButton>
    </Motion>
  );
};

export default TopicsPage;