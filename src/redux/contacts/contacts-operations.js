import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  delContacts,
  addContacts,
  changeContacts,
} from '../../shared/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const result = await getContacts();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addItems = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await addContacts(data);
      return result;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      const isDublicate = contacts.items.find(item => item.name === data.name);
      if (isDublicate) {
        alert(`Name ${data.name} is already exist in the phone book!`);
        return false;
      }
    },
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/del',
  async (id, { rejectWithValue }) => {
    try {
      const result = await delContacts(id);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const changeContactsItems = createAsyncThunk(
  'contacts/change',
  async (data, { rejectWithValue }) => {
    try {
      const result = await changeContacts(data);

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
