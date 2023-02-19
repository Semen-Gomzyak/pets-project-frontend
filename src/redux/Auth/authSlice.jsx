import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, getUser, updateUser } from './authOperations';

const initialState = {
  user: {
    _id: '',
    name: '',
    email: '',
    cityRegion: '',
    mobilePhone: '',
    avatarURL: '',
    favoriteNotices: [],
  },
  pets: [],
  token: null,
  isLoading: false,
  isAuth: false,
  error: null,
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: handlePending,
    [login.pending]: handlePending,
    [logout.pending]: handlePending,
    [getUser.pending]: handlePending,
    [updateUser.pending]: handlePending,

    [register.rejected]: handleRejected,
    [login.rejected]: handleRejected,
    [logout.rejected]: handleRejected,
    [getUser.rejected]: handleRejected,
    [updateUser.rejected]: handleRejected,

    [register.fulfilled]: (state, { payload: { user, token } }) => {
      state.token = token;
      state.user = user;
      state.isAuth = true;
      state.isLoading = false;
    },
    [login.fulfilled]: (state, { payload: { user, token } }) => {
      state.token = token;
      state.user = user;
      state.isAuth = true;
      state.isLoading = false;
    },
    [logout.fulfilled]: state => {
      state.token = null;
      state.user = {
        _id: '',
        name: '',
        email: '',
        cityRegion: '',
        mobilePhone: '',
        avatarURL: '',
        favoriteNotices: [],
      };
      state.isAuth = false;
      state.isLoading = false;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.pets = payload.pets;
      state.isAuth = true;
      state.isLoading = false;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
