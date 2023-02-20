const { createSlice } = require('@reduxjs/toolkit');
const { register, login } = require('./authOperations');

const initialState = {
  user: { name: null, email: null, password: null, city: null, phone: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    }).addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    }),
});

export const authReducer = authSlice.reducer;
