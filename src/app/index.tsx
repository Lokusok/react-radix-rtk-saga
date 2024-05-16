import { BrowserRouter } from 'react-router-dom';

import { Reset } from '@radix-ui/themes';
import ThemeProvider from '../providers/theme';
import AnimRoutes from './anim-routes';

function App() {
  return (
    <>
      <ThemeProvider>
        <Reset>
          <BrowserRouter>
            <AnimRoutes />
          </BrowserRouter>
        </Reset>
      </ThemeProvider>
    </>
  );
}

export default App;
