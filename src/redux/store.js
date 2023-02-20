import { configureStore } from '@reduxjs/toolkit';
// import { getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { authReducer } from './Auth/authSlice';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlise';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
  },
  // middleware,

// Persisting token field from auth slice to localstorage
// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    auth: authReducer /*, authReducer*/,
    // notices: noticesReduser,
    // filter: filterreduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
// export const persistor = persistStore(store);
