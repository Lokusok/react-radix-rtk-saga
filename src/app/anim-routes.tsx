import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Main from './main';
import UsersPage from './main/users';
import TodosPage from './main/todos';
import DefaultPage from './main/default';
import CommentsPage from './main/comments';
import PhotosPage from './main/photos';

function AnimRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/">
          <Route path="" element={<Main />}>
            <Route index element={<DefaultPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="todos" element={<TodosPage />} />
            <Route path="comments" element={<CommentsPage />} />
            <Route path="photos" element={<PhotosPage />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimRoutes;
