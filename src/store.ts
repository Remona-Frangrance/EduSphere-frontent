import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './services/authApi';
import authReducer from './services/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Using localStorage for persistence

// Configure the persistence for the auth reducer
const persistConfig = {
  key: 'auth', // Key used to store the state in localStorage
  storage, // Using localStorage to persist the state
  whitelist: ['user'], // Optionally, you can persist only certain parts of the auth state
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: persistedAuthReducer, // Persisted auth reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// Creating a persistor to persist the Redux store
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
