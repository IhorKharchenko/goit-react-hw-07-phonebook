import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { ThemeProvider } from '@emotion/react';
import { App } from 'components/App';
import { theme } from './theme';
import { Provider } from 'react-redux';
import { store } from 'components/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
