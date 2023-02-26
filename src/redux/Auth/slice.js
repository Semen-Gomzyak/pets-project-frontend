import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  refreshUser,
  updateFavoriteNotice,
  getFavoriteNotices,
} from './operations';

const authSlise = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      password: null,
      city: null,
      phone: null,
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
        // state._id = action.payload._id;
        // state.token = action.payload.token;
        // state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state._id = action.payload._id;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state._id = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;

        state._id = action.payload.id;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
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
