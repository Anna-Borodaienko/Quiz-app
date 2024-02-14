import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';

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
  return (
    <AppWrapper>
      <StyledApp>
      <header>
        <Header />
      </header>
      <main>
        <MainPage />
      </main>
      </StyledApp>
    </AppWrapper>
  );
}

export default App;
