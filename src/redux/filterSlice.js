import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filt: '',
  },
  reducers: {
    filterPet(state, { payload }) {
      state.filt = payload;
    },
  },
});

const persistConfig = {
  key: 'filters',
  storage,
  // whitelist: ['login', 'a'],
  // blacklist: ['c', 'b'],
};

export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);
export const { filterPet } = filterSlice.actions;

// ===== Selectors =====

export const getFilterValue = state => state.filter.filt;
