import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './services/theme';
import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <BrowserRouter basename="/pets-project-frontend">
        <ThemeProvider theme={theme}>
          <App />
          {/* <div id="modal-root"></div> */}
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
    <div id="modal-root"></div>
  </>
);
