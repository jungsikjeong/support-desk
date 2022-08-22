import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import ticketSlice from '../features/tickets/ticketSlice';
import noteSlice from '../features/notes/noteSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketSlice,
    notes: noteSlice,
  },
});
