import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialPets = [];

const petSlice = createSlice({
  name: 'pets',
  initialState: {
    item: initialPets,
  },

  reducers: {
    addPet(state, action) {
      state.item.push(action.payload);
    },
    deletePet(state, action) {
      state.item = state.item.filter(pet => pet.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'item',
  storage,
  whitelist: ['item'],
};

export const contactReducer = persistReducer(persistConfig, petSlice.reducer);
export const { addPet, deletePet } = petSlice.actions;

// ===== Selectors =====

export const getPets = state => state.pet.item;
