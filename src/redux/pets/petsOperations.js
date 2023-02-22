import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://pets-project-backend.onrender.com/api';

export const fetchPets = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/pets');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);


export const addPets = createAsyncThunk(
  'contacts/addPet',
  async (newPet, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newPet);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);



export const  deletePets = createAsyncThunk(
  'pets/deletePet',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/pets/${id}`);
      return response.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);



export const updatePet = createAsyncThunk(
  'pets/updatePet',
  async (id, thunkAPI) => {
    try {
      const response = await axios.patch(`/pets/${id}`);
      return response.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);







// import * as contactsActions from './contactsActions';

// export const fetchContacts = () => async dispatch => {
// dispatch(contactsActions.fetchContactsRequest());

// try{
// const contacts = await contactsAPI.fetchContacts();
// dispatch(contactsActions.fetchContactsSuccess(contacts));
// } catch (error) {
// dispatch(contactsActions.fetchContactsError(error));
// }
// };

// =====================================

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await contactsAPI.fetchContacts();
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// =====================================
