import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://pets-project-backend.onrender.com/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/register', credentials);
      setAuthHeader(response.data.token);

      return {
        user: response.data,
        status: response.status,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      await setAuthHeader(response.data.token);

      return {
        _id: response.data._id,
        token: response.data.token,
        status: response.status,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
   await axios.post('/users/logout', { token: '' });
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.user.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       setAuthHeader(persistedToken);
//       const response = await axios.get('/users/current');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// додавання та видалення оголошення з обраних
export const updateFavoriteNotice = createAsyncThunk(
  'notices/updateFavoriteNotice',

  async ({ userId, noticeId }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `/notices/${userId}/favorites/${noticeId}`
      );
      return response.data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//  отримання масиву обраних нотісів
export const getFavoriteNotices = createAsyncThunk(
  'notices/getFavoriteNotices',

  async ({ userId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/notices/${userId}/favorites`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
