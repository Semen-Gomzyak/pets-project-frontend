import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const DEFAULT_LIMIT = 8;

// GET @ /notices/category   отримання оголошень по категоріям
export const fetchAllNotices = createAsyncThunk(
  'notices/fetchAllNotices',
  //деструктуруємо перший параметр
  async ({ category = 'sell', page = 1, limit = DEFAULT_LIMIT }, thunkAPI) => {
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

// GET @ /notices/category   отримання оголошень по категоріям
export const fetchNoticesByCategoryAndTitle = createAsyncThunk(
  'notices/fetchAllNotices',
  //деструктуруємо перший параметр
  async (
    { category, title = '', page = 1, limit = DEFAULT_LIMIT },
    thunkAPI
  ) => {
    try {
      const response = await axios.get(
        `/notices/category/${category}/${title}?page=${page}&limit=${limit}`
      );
      // console.log('notices.data', response.data);
      // При успешном запросе возвращаем промис с данными
      return response.data.filteredNotices;
    } catch (error) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET  @ /notices/notice/:noticeId отримання одного оголошення
export const fetchOneNotice = createAsyncThunk(
  'notices/fetchOneNotice',

  async ({ noticeId }, { rejectWithValue }) => {
    try {
      const response = await axios(`/notices/${noticeId}`);
      return response.data;
    } catch (error) {
      toast.error('something went wrong in  addContact, please, try again');
      return rejectWithValue(error.message);
    }
  }
);

// POST @ /notices/addNotice відповідно до категорії
export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (newNotice, { rejectWithValue }) => {
    try {
      const response = await axios.post('/notices', newNotice);
      return response.data;
    } catch (error) {
      toast.error('something went wrong in  addContact, please, try again');
      return rejectWithValue(error.message);
    }
  }
);

// DELETE @ /notices/:id
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
