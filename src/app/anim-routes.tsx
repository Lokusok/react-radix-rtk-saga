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
    <Routes location={location} key={location.pathname}>
      <Route path="/">
        <Route
          path=""
          element={
            <AnimatePresence>
              <Main />
            </AnimatePresence>
          }
        >
          <Route index element={<DefaultPage />} />
          <Route
            path="users"
            element={
              <AnimatePresence>
                <UsersPage />
              </AnimatePresence>
            }
          />
          <Route
            path="todos"
            element={
              <AnimatePresence>
                <TodosPage />
              </AnimatePresence>
            }
          />
          <Route
            path="comments"
            element={
              <AnimatePresence>
                <CommentsPage />
              </AnimatePresence>
            }
          />
          <Route
            path="photos"
            element={
              <AnimatePresence>
                <PhotosPage />
              </AnimatePresence>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default AnimRoutes;
