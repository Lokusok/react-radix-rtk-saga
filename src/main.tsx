import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app';

import '@radix-ui/themes/styles.css';
import { Reset, Theme } from '@radix-ui/themes';

import './index.css';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <Reset>
          <App />
        </Reset>
      </Theme>
    </Provider>
  </React.StrictMode>
);
