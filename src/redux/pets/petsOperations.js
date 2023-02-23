import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://pets-project-backend.onrender.com/api';

export const fetchPets = createAsyncThunk(
  'pets/fetchAll',
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
  'pets/addPet',
  async (newPet, thunkAPI) => {
    try {
      const response = await axios.post('/pets', newPet);
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



