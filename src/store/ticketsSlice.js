import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getTickets } from '../services/aviasales-service';

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', getTickets);

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    error: false,
    stop: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTickets.pending, (state) => {
      state.error = false;
    });

    builder.addCase(fetchTickets.fulfilled, (state, action) => {
      state.stop = action.payload?.stop;
      if (action.payload?.tickets) {
        state.tickets = [...state.tickets, ...action.payload.tickets];
      }
    });

    builder.addCase(fetchTickets.rejected, (state,action) => {
      state.error = true;
      state.stop = action.payload?.stop;
    });
  },
});

export default ticketsSlice.reducer;
