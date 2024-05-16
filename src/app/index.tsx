import { RouterProvider } from 'react-router-dom';

import { Reset } from '@radix-ui/themes';
import router from './router';
import ThemeProvider from '../providers/theme';

function App() {
  return (
    <>
      <ThemeProvider>
        <Reset>
          <RouterProvider router={router} />
        </Reset>
      </ThemeProvider>
    </>
  );
}

export default App;
