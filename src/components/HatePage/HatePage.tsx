import { Link } from "react-router-dom";
import { getHate, setHate } from "../../api/answers";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Header from "../Header/Header";

interface HatePageProps {
  totalNr: number;
  currentNr: number;
  changeQuestion: (number: number) => void;
}

const HatePage: React.FC<HatePageProps> = ({ totalNr, currentNr, changeQuestion }: HatePageProps) => {
  const [hates, setHates] = useState<Array<string>>([]);
  
  useEffect(() => {
    const themes = getHate();
    if (themes) setHates(themes.split(','));
  }, []);

  const onHandleTheme = (theme: string) => {
    const inList = hates.includes(theme);
    inList ? setHates(hates.filter(item => item !== theme)) : setHates([...hates, theme]);
  }

  const onSubmitHate = (): void => {
    setHate(hates);
    changeQuestion(currentNr + 1);
  }

  return (
    <>
    <Header totalNr={totalNr} currentNr={currentNr} changeQuestion={changeQuestion} />
    <div>What do you hate the most in a book?</div>
    <div onClick={() => onHandleTheme('Lack of logic')}>
      <span>Lack of logic</span>
      {hates.includes('Lack of logic') ? <span>Checked</span> : <span>Unchecked</span>}
    </div>
    <div onClick={() => onHandleTheme('A slow speed')}>
      <span>A slow speed</span>
      {hates.includes('A slow speed') ? <span>Checked</span> : <span>Unchecked</span>}
    </div>
    <div onClick={() => onHandleTheme('Lack of humor')}>
      <span>Lack of humor</span>
      {hates.includes('Lack of humor') ? <span>Checked</span> : <span>Unchecked</span>}
    </div>
    <div onClick={() => onHandleTheme('Way too generic ending')}>
      <span>Way too generic ending</span>
      {hates.includes('Way too generic ending') ? <span>Checked</span> : <span>Unchecked</span>}
    </div>
    <Link to={`/quiz/${currentNr + 1}`}>
      <button onClick={onSubmitHate} disabled={hates.length === 0}>Next</button>
    </Link>
  </>
  )
}

export default HatePage;
