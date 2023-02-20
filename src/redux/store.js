
import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';

import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

import { petsReducer } from './pets/petsReduser';
import { filterReducer } from './filterSlice';
// import  authReducer  from "./auth/auth-slice"
// import persistReducer from 'redux-persist/es/persistReducer';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
  contact: petsReducer,
  filter: filterReducer,
  // auth: persistReducer(authPersistConfig, authReducer),
},
  middleware(getDefaultMiddleware) {

  return getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });
  },
});

export const persistor = persistStore(store);

// export const persistor = persistStore(store);
