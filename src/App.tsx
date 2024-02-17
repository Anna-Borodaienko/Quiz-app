import React, { useState } from 'react';
import MainPage from './components/Pages/MainPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import GenderPage from './components/Pages/GenderPage';
import AgePage from './components/Pages/AgePage';
import { totalQuestionsNr } from './constants/questions';
import HatePage from './components/Pages/HatePage';
import TopicsPage from './components/Pages/TopicsPage';
import EmailPage from './components/Pages/EmailPage';
import FinishPage from './components/Pages/FinishPage';
import { AppWrapper, StyledApp } from './App.styled';
import LoadingPage from './components/Pages/LoadingPage';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentQuestionNr, setCurrentQuestionNr] = useState(1);

  const changeQuestion = (number: number) => {
    setCurrentQuestionNr(number);
  }

  const location = useLocation();

  return (
    <AppWrapper>
      <StyledApp>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
          <Route index path='/' element={<MainPage totalNr={totalQuestionsNr} currentNr={currentQuestionNr <= totalQuestionsNr ? currentQuestionNr : 1} changeQuestion={changeQuestion}/>} />
          <Route path='/quiz/1' element={<MainPage totalNr={totalQuestionsNr} currentNr={currentQuestionNr <= totalQuestionsNr ? currentQuestionNr : 1} changeQuestion={changeQuestion} />} />
          <Route path='/quiz/2' element={<GenderPage totalNr={totalQuestionsNr} currentNr={currentQuestionNr} changeQuestion={changeQuestion} />} />
          <Route path='/quiz/3' element={<AgePage totalNr={totalQuestionsNr} currentNr={currentQuestionNr} changeQuestion={changeQuestion} />} />
          <Route path='/quiz/4' element={<HatePage totalNr={totalQuestionsNr} currentNr={currentQuestionNr} changeQuestion={changeQuestion} />} />
          <Route path='/quiz/5' element={<TopicsPage totalNr={totalQuestionsNr} currentNr={currentQuestionNr} changeQuestion={changeQuestion} />} />
          <Route path='/loader' element={<LoadingPage />} />
          <Route path='/email' element={<EmailPage />} />
          <Route path='/finish' element={<FinishPage />} />
        </Routes>
        </AnimatePresence>
      </StyledApp>
    </AppWrapper>
  );
}

export default App;
