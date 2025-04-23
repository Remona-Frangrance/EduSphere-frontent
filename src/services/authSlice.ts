import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  _id: string;
  email: string;
  subscriptions?: { type: string; referenceId?: string }[];
}

interface AuthState {
  token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('token') || null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<{ token: string; user: User }>) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem('token', action.payload.token);
    },
    setCredentials(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    clearToken(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setToken, setCredentials, clearToken } = authSlice.actions;
export default authSlice.reducer;
