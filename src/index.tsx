import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import "./i18n/config.ts";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Nunito Sans", sans-serif;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Global />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
