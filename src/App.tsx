import React from 'react';
import MainPage from './Pages/MainPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import GenderPage from './Pages/GenderPage';
import AgePage from './Pages/AgePage';
import TopicsPage from './Pages/TopicsPage';
import EmailPage from './Pages/EmailPage';
import FinishPage from './Pages/FinishPage';
import { AppWrapper, StyledApp } from './App.styled';
import LoadingPage from './Pages/LoadingPage';
import { AnimatePresence } from 'framer-motion';
import HatesPage from './Pages/HatesPage';
import { Pages } from './constants/pages';

const App: React.FC = () => {

  const location = useLocation();

  return (
    <AppWrapper>
      <StyledApp>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route index path={Pages.HOME} element={<MainPage />} />
            <Route path={`${Pages.QUIZ}/1`} element={<MainPage />} />
            <Route path={`${Pages.QUIZ}/2`} element={<GenderPage />} />
            <Route path={`${Pages.QUIZ}/3`} element={<AgePage />} />
            <Route path={`${Pages.QUIZ}/4`} element={<HatesPage />} />
            <Route path={`${Pages.QUIZ}/5`} element={<TopicsPage />} />
            <Route path={Pages.LOADER} element={<LoadingPage />} />
            <Route path={Pages.EMAIL} element={<EmailPage />} />
            <Route path={Pages.FINISH} element={<FinishPage />} />
          </Routes>
        </AnimatePresence>
      </StyledApp>
    </AppWrapper>
  );
}

export default App;
