import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TSearchInitialState, TOrder } from './types';

const initialState: TSearchInitialState = {
  searchQuery: '',
  order: 'default',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setOrder: (state, action: PayloadAction<TOrder>) => {
      state.order = action.payload;
    },
  },
});

export const { setSearchQuery, setOrder } = searchSlice.actions;

export default searchSlice.reducer;
