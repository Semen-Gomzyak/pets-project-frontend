import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const DEFAULT_LIMIT = 8;

// GET @ /notices/category   отримання оголошень по категоріям
export const fetchAllNotices = createAsyncThunk(
  'notices/fetchAllNotices',
  //деструктуруємо перший параметр
  async (
    { category, qwery = '', page = 1, limit = DEFAULT_LIMIT },
    thunkAPI
  ) => {
    try {
      const response = await axios.get(
        `/notices/category/${category}?page=${page}&limit=${limit}&qwery=${qwery}`
      );
      // При успешном запросе возвращаем промис с данными
      return response.data;
    } catch (error) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//TODO!!!!!!! переробити після тесту отримання всих оголошень
/*
// POST @ /contacts
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      toast.error('something went wrong in  addContact, please, try again');
      return rejectWithValue(error.message);
    }
  }
);
// DELETE @ /contacts/:id
export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      toast.error('something went wrong, please, try again');
      return rejectWithValue(error.message);
    }
  }
);
*/
