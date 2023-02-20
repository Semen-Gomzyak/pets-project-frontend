import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPets,
  addPets,
  deletePets,
} from './petsOperations';

const initialPets = [
  { id: 'id-1', name: 'Rosie Simpson', date: '20.09.2020', breed: 'hasky', favorite: 'true', avatarURL: '', seks: '', owner: '',},
  { id: 'id-2', name: 'Kary Harison', date: '21.09.2020', breed: 'labrador', favorite: 'true', avatarURL: '', seks: '', owner: '',},
  { id: 'id-2', name: 'Mary Roland ', date: '22.09.2022', breed: 'doberman', favorite: 'true', avatarURL: '', seks: '', owner: '',},
  { id: 'id-2', name: 'Toby Leon', date: '21.07.2021', breed: 'chihahuahua', favorite: 'false', avatarURL: '', seks: '', owner: '',},
];



const onPending = state => {
  state.isLoading = true;
};

const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    items: initialPets,
    isLoading: false,
    error: null,
  },

  extraReducers: {

    [fetchPets.pending]: onPending,
    [fetchPets.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchPets.rejected]: onRejected,

    [addPets.pending]: onPending,
    [addPets.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
      state.isLoading = false;
      state.error = null;
    },
    [addPets.rejected]: onRejected,

    [deletePets.pending]: onPending,
    [deletePets.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
      state.isLoading = false;
      state.error = null;
    },
    [deletePets.rejected]: onRejected,

  },
});

// ===== Selectors ======


export const getPets = state => state.contact.items;

export const selectIsLoading = state => state.isLoading;

export const selectError = state => state.error;

export const petsReducer = petsSlice.reducer;


// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { entities: [], isLoading: false, error: null },
//   extraReducers: {
//     [fetchContacts.fulfilled]: (state, { payload }) =>
//       (state.entities = payload),
//     [fetchContacts.pending]: state => (state.isLoading = true),
//   },
// });

// console.log(contactsSlice);

// export default contactsSlice.reducer;

// import * as contactsActions from './contactsActions';

// const entities = createReducer([], {
//     [fetchContacts.fulfilled]: (_, action) => action.payload,
//   });

//   const isLoading = createReducer(false, {
//     [fetchContacts.pending]: () => true,
//     [fetchContacts.fulfilled]: () => false,
//     [fetchContacts.rejected]: () => false,
//   });

//   const error = createReducer(null, {
//     [fetchContacts.rejected]: (_, action) => action.payload,
//     [fetchContacts.pending]: () => null,
//   });

//   export default combineReducers({
//     entities,
//     isLoading,
//     error,
//   });
