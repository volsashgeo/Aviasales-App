import { createSlice } from '@reduxjs/toolkit';

const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    sort: [true, false, false],
  },
  reducers: {
    cheapest(state) {
      state.sort = [true, false, false];
    },
    fastest(state) {
      state.sort = [false, true, false];
    },
    optimal(state) {
      state.sort = [false, false, true];
    },
  },
  selectors: {
    tabs: (state) => state.sort.sort,
  },
});

export const { cheapest, fastest, optimal } = sortSlice.actions;
export default sortSlice.reducer;
