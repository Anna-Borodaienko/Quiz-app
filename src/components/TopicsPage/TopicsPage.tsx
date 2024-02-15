import { useEffect, useState } from "react";
import { getTopic, submitTopic } from "../../api/answers";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

interface TopicsPageProps {
  totalNr: number;
  currentNr: number;
  changeQuestion: (number: number) => void;
}

const TopicsPage: React.FC<TopicsPageProps> = ( { totalNr, currentNr, changeQuestion }: TopicsPageProps) => {
  const [topics, setTopics] = useState<Array<string>>([]);
  
  useEffect(() => {
    const genres = getTopic();
    if (genres) setTopics(genres.split(','));
  }, []);

  const onHandleTheme = (theme: string) => {
    const inList = topics.includes(theme);
    if (inList) {
      setTopics(topics.filter(item => item !== theme)) ;
    } else if (topics.length < 3) {
      setTopics([...topics, theme]);
    }
  };

  const onSubmitHate = (): void => {
    submitTopic(topics);
    changeQuestion(currentNr + 1);
  }

  return (
    <>
      <Header totalNr={totalNr} currentNr={currentNr} changeQuestion={changeQuestion} />
      <div>What are your favorite topics?</div>
      <div>Choose up to 3 topics you like</div>
        <div onClick={() => onHandleTheme('Werewolf')}>
          <span>Werewolf</span>
          {topics.includes('Werewolf') ? <span>Checked</span> : <span>Unchecked</span>}
        </div>
        <div onClick={() => onHandleTheme('Action')}>
          <span>Action</span>
          {topics.includes('Action') ? <span>Checked</span> : <span>Unchecked</span>}
        </div>
        <div onClick={() => onHandleTheme('Romance')}>
          <span>Romance</span>
          {topics.includes('Romance') ? <span>Checked</span> : <span>Unchecked</span>}
        </div>
        <div onClick={() => onHandleTheme('Young Adult')}>
          <span>Young Adult</span>
          {topics.includes('Young Adult') ? <span>Checked</span> : <span>Unchecked</span>}
        </div>
      <Link to="/loader">
        <button onClick={onSubmitHate} disabled={topics.length === 0}>Next</button>
      </Link>
    </>
  );
};

export default TopicsPage;