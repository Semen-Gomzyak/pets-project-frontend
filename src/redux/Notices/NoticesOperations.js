import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const DEFAULT_LIMIT = 8;

// GET @ /notices/category   отримання оголошень по категоріям
export const fetchAllNotices = createAsyncThunk(
  'notices/fetchAllNotices',
  //деструктуруємо перший параметр
  async ({ category, page = 1, limit = DEFAULT_LIMIT }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/notices/category/${category}?page=${page}&limit=${limit}`
      );
      // console.log('notices.data', response.data);
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
*/
// DELETE @ /contacts/:id
export const removeNotice = createAsyncThunk(
  'notices/removeNotice',
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.delete(`/notices/${noticeId}`);
      return response.data.noticeId;
    } catch (error) {
      toast.error('something went wrong, please, try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
