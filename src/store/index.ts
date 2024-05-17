import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/users';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
import { useDispatch, useSelector } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
