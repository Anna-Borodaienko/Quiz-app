import React, { useState } from 'react';
import MainPage from './components/MainPage';
import { Routes, Route } from 'react-router-dom';
import GenderPage from './components/GenderPage';
import AgePage from './components/AgePage';
import { totalQuestionsNr } from './constants/questions';
import HatePage from './components/HatePage';
import TopicsPage from './components/TopicsPage';
import EmailPage from './components/EmailPage';
import FinishPage from './components/FinishPage';
import { AppWrapper, PageContainer, StyledApp } from './App.styled';
import LoadingPage from './components/LoadingPage';

const App: React.FC = () => {
  const [currentQuestionNr, setCurrentQuestionNr] = useState(1);

  const changeQuestion = (number: number) => {
    setCurrentQuestionNr(number);
  }

  return (
    <AppWrapper>
      <StyledApp>
        <PageContainer>
          <Routes>
            <Route path='/' element={<MainPage totalNr={totalQuestionsNr} currentNr={currentQuestionNr <= totalQuestionsNr ? currentQuestionNr : 1} changeQuestion={changeQuestion}/>} />
            <Route path='/quiz/1' element={<MainPage totalNr={totalQuestionsNr} currentNr={currentQuestionNr <= totalQuestionsNr ? currentQuestionNr : 1} changeQuestion={changeQuestion} />} />
            <Route path='/quiz/2' element={<GenderPage totalNr={totalQuestionsNr} currentNr={currentQuestionNr} changeQuestion={changeQuestion} />} />
            <Route path='/quiz/3' element={<AgePage totalNr={totalQuestionsNr} currentNr={currentQuestionNr} changeQuestion={changeQuestion} />} />
            <Route path='/quiz/4' element={<HatePage totalNr={totalQuestionsNr} currentNr={currentQuestionNr} changeQuestion={changeQuestion} />} />
            <Route path='/quiz/5' element={<TopicsPage totalNr={totalQuestionsNr} currentNr={currentQuestionNr} changeQuestion={changeQuestion} />} />
            <Route path='/loader' element={<LoadingPage />} />
            <Route path='/email' element={<EmailPage />} />
            <Route path='/finish' element={<FinishPage />} />
          </Routes>
        </PageContainer>
      </StyledApp>
    </AppWrapper>
  );
}

export default App;
