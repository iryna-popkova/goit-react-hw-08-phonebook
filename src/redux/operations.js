import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get(`/contacts`);
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const saveNewContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const contactToSave = await axios.post('/contacts', contact);
      return contactToSave.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const contactToDelete = await axios.delete(`/contacts/${id}`);
      return contactToDelete.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
