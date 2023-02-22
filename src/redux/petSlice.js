import {  createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialPets = [
    { id: 'id-1',   name: 'Simon', date: '01.02.23', breed: 'dog', comments: 'aaa', favorite: '', avatarURL: '', seks: '', owner: '', },
    { id: 'id-2',   name: 'Toby', date: '02.03.22', breed: 'doberman', comments: 'bbb', favorite: '', avatarURL: '', seks: '', owner: '', },
    { id: 'id-3',   name: 'Boby', date: '01.02.20', breed: 'chihahuahua', comments: 'ccc', favorite: '', avatarURL: '', seks: '', owner: '', },
  ];

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
            state.item = state.item.filter(pet => pet.id!== action.payload);
        },
    },
})


const persistConfig = {
    key: 'item',
    storage,
    whitelist: ['item'],
  };
  
export const contactReducer = persistReducer(persistConfig, petSlice.reducer);
export const { addPet, deletePet } = petSlice.actions;


// ===== Selectors =====

export const getPets = state => state.pet.item;