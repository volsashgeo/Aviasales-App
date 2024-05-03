import { configureStore } from '@reduxjs/toolkit';

import sortReducer from './sortSlice';
import filterReducer from './filterSlice';
import ticketsReducer from './ticketsSlice';
import * as appSelectors from './selectors';

export default configureStore({
  reducer: {
    sort: sortReducer,
    filter: filterReducer,
    tickets: ticketsReducer,
  },
});

export { appSelectors };
