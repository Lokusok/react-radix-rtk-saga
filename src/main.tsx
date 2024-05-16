import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

import '@radix-ui/themes/styles.css';
import { Reset, Theme } from '@radix-ui/themes';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <Reset>
        <App />
      </Reset>
    </Theme>
  </React.StrictMode>
);