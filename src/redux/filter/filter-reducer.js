import { createReducer } from '@reduxjs/toolkit';
import { addFilter } from './filter-actions';

const filterReducer = createReducer('', {
  [addFilter]: (store, { _, payload }) => payload,
});

export default filterReducer;
