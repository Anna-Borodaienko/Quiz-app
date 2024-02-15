import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainPage from './components/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import GenderPage from './components/GenderPage/GenderPage';
import AgePage from './components/AgePage/AgePage';
import { questions } from './constants/questions';
import Header from './components/Header/Header';
import HatePage from './components/HatePage/HatePage';
import TopicsPage from './components/TopicsPage/TopicsPage';
import CircleProgressBar from './components/CircleProgressBar/CircleProgressBar';
import EmailPage from './components/EmailPage/EmailPage';
import FinishPage from './components/FinishPage/FinishPage';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledApp = styled.div`
  width: 375px;
  height: 600px;
  color: white;
  background: #36173D;
  border-radius: 2%;
  border: 2px solid #24262b;
  box-shadow: 2px 4px 6px 0px #24262b;
`

const App: React.FC = () => {
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currentQuestionNr, setCurrentQuestionNr] = useState(1);

  useEffect(() => {
    const totalNr = Object.keys(questions).length;
    setTotalQuestions(totalNr);
  }, []);

  const changeQuestion = (number: number) => {
    setCurrentQuestionNr(number);
  }

  console.log(currentQuestionNr);

  return (
    <AppWrapper>
      <StyledApp>
        <header><Header totalNr={totalQuestions} currentNr={currentQuestionNr} changeQuestion={changeQuestion} /></header>
        <main>
          <Routes>
            <Route path='/' element={<MainPage currentNr={currentQuestionNr} changeQuestion={changeQuestion}/>} />
            <Route path='/quiz/1' element={<MainPage currentNr={currentQuestionNr} changeQuestion={changeQuestion} />} />
            <Route path='/quiz/2' element={<GenderPage currentNr={currentQuestionNr} changeQuestion={changeQuestion} />} />
            <Route path='/quiz/3' element={<AgePage currentNr={currentQuestionNr} changeQuestion={changeQuestion} />} />
            <Route path='/quiz/4' element={<HatePage currentNr={currentQuestionNr} changeQuestion={changeQuestion} />} />
            <Route path='/quiz/5' element={<TopicsPage currentNr={currentQuestionNr} changeQuestion={changeQuestion} />} />
            <Route path='/loader' element={<CircleProgressBar />} />
            <Route path='/email' element={<EmailPage />} />
            <Route path='/finish' element={<FinishPage />} />
          </Routes>
        </main>
      </StyledApp>
    </AppWrapper>
  );
}

export default App;
