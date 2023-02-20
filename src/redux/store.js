import { configureStore } from '@reduxjs/toolkit';
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

// export const persistor = persistStore(store);
