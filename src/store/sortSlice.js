import { createSlice } from '@reduxjs/toolkit';

const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    sort: [true, false, false],
  },
  reducers: {
    cheapest(state, action) {
      console.log('action', action);
      state.sort = [true, false, false];
    },
    fastest(state, action) {
      console.log('action', action);
      state.sort = [false, true, false];
    },
    optimal(state, action) {
      console.log('action', action);
      state.sort = [false, false, true];
    },
  },
});

export const {cheapest,fastest,optimal} = sortSlice.actions

export default sortSlice.reducer
