import React from 'react';
import MainPage from './components/Pages/MainPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import GenderPage from './components/Pages/GenderPage';
import AgePage from './components/Pages/AgePage';
import HatePage from './components/Pages/HatePage';
import TopicsPage from './components/Pages/TopicsPage';
import EmailPage from './components/Pages/EmailPage';
import FinishPage from './components/Pages/FinishPage';
import { AppWrapper, StyledApp } from './App.styled';
import LoadingPage from './components/Pages/LoadingPage';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {

  const location = useLocation();

  return (
    <AppWrapper>
      <StyledApp>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
          <Route index path='/' element={<MainPage />} />
          <Route path='/quiz/1' element={<MainPage />} />
          <Route path='/quiz/2' element={<GenderPage />} />
          <Route path='/quiz/3' element={<AgePage />} />
          <Route path='/quiz/4' element={<HatePage />} />
          <Route path='/quiz/5' element={<TopicsPage />} />
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
