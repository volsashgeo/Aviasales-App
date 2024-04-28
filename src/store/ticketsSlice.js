import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getTickets } from '../services/aviasales-service';

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async () => getTickets());

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    error: false,
    loading: true,
    stop: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTickets.pending, (state) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(fetchTickets.fulfilled, (state, action) => {
      state.loading = false;
      state.stop = action?.payload?.stop;
      if (action?.payload?.tickets) {
        state.tickets = [...state.tickets, ...action.payload.tickets];
      }
    });

    builder.addCase(fetchTickets.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default ticketsSlice.reducer;
