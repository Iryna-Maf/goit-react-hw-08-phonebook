import { createReducer, combineReducers } from '@reduxjs/toolkit';

import * as actions from './contacts-actions';

const itemsReducer = createReducer([], {
  [actions.fetchContactsSucces]: (_, { payload }) => payload,
  [actions.delContactSucces]: (store, { payload }) =>
    store.filter(item => item.id !== payload),
  [actions.addContactSucces]: (store, { payload }) => [payload, ...store],
});
const loadingReducer = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSucces]: () => false,
  [actions.fetchContactsError]: () => false,
  [actions.delContactRequest]: () => true,
  [actions.delContactSucces]: () => false,
  [actions.delContactError]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactSucces]: () => false,
  [actions.addContactError]: () => false,
});
const errorReducer = createReducer(null, {
  [actions.fetchContactsRequest]: () => null,
  [actions.fetchContactsError]: (_, { payload }) => payload,
  [actions.delContactRequest]: () => null,
  [actions.delContactError]: (_, { payload }) => payload,
  [actions.addContactRequest]: () => null,
  [actions.addContactError]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default contactsReducer;
