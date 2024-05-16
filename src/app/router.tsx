import { createBrowserRouter } from 'react-router-dom';
import Main from './main';
import UsersPage from './main/users';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '',
        element: <Main />,
        children: [
          {
            path: 'users',
            element: <UsersPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
