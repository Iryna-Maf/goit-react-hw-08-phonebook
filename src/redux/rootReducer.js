import { combineReducers } from 'redux';
import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-reducer';

import authReducer from './auth/auth-slice';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token', 'items'],
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
// const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
