import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filtersReducer } from './filterSlice';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './authorization/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactReducer,
    filter: filtersReducer,
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

// export const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//     filter: filtersReducer,
//   },
// });
