import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: [false, false, false, false, false],
  },
  reducers: {
    allCheckboxesChecked(state, action) {
      const newArr = [...action.payload];

      if (newArr[0]) {
        newArr[1] = false;
        newArr[2] = false;
        newArr[3] = false;
        newArr[4] = false;
      } else {
        newArr[1] = true;
        newArr[2] = true;
        newArr[3] = true;
        newArr[4] = true;
      }
      newArr[0] = !newArr[0];

      state.filter = newArr;
    },

    noTransferChecked(state, action) {
      const newArr = [...action.payload];

      if (!newArr[1] && newArr[2] && newArr[3] && newArr[4]) {
        newArr[0] = true;
      }

      if (newArr[0] && newArr[1]) {
        newArr[0] = !newArr[0];
        newArr[1] = !newArr[1];
      } else {
        newArr[1] = !newArr[1];
      }

      state.filter = newArr;
    },

    oneTransferChecked(state, action) {
      const newArr = [...action.payload];

      if (newArr[1] && !newArr[2] && newArr[3] && newArr[4]) {
        newArr[0] = true;
      }

      if (newArr[0] && newArr[2]) {
        newArr[0] = !newArr[0];
        newArr[2] = !newArr[2];
      } else {
        newArr[2] = !newArr[2];
      }

      state.filter = newArr;
    },

    twoTransferChecked(state, action) {
      const newArr = [...action.payload];

      if (newArr[1] && newArr[2] && !newArr[3] && newArr[4]) {
        newArr[0] = true;
      }

      if (newArr[0] && newArr[3]) {
        newArr[0] = !newArr[0];
        newArr[3] = !newArr[3];
      } else {
        newArr[3] = !newArr[3];
      }

      state.filter = newArr;
    },

    threeTransferChecked(state, action) {
      const newArr = [...action.payload];

      if (newArr[1] && newArr[2] && newArr[3] && !newArr[4]) {
        newArr[0] = true;
      }

      if (newArr[0] && newArr[4]) {
        newArr[0] = !newArr[0];
        newArr[4] = !newArr[4];
      } else {
        newArr[4] = !newArr[4];
      }
      state.filter = newArr;
    },
  },
});

export const { allCheckboxesChecked, noTransferChecked, oneTransferChecked, twoTransferChecked, threeTransferChecked } =
  filterSlice.actions;

export default filterSlice.reducer;
