import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  refreshUser,
  updUser,
  updateFavoriteNotice,
  getFavoriteNotices,
} from './operations';

const userInitialState = {
  name: null,
  email: null,
  password: null,
  city: null,
  phone: null,
  pets: [],
  favoriteNotices: [],
};

const authSlise = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      password: null,
      city: null,
      phone: null,
      avatarURL: null,
      pets: [],
      favoriteNotices: [],
    },
    _id: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },

  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state._id = action.payload._id;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = userInitialState;
        state._id = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state._id = action.payload._id;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })

      .addCase(getFavoriteNotices.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getFavoriteNotices.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFavoriteNotices.fulfilled, (state, { payload }) => {
        state.user.favoriteNotices = payload;
        state.isLoading = false;
      })
      .addCase(updateFavoriteNotice.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateFavoriteNotice.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateFavoriteNotice.fulfilled, (state, { payload }) => {
        state.user.favoriteNotices = payload;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlise.reducer;
