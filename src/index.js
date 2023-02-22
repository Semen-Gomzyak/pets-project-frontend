import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import { store } from './redux/store';

import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './services/theme';
import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PersistGate loading={null} persistor={persistor}> */}

    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
          <div id="modal-root"></div>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
    {/* </PersistGate> */}
  </React.StrictMode>
);
