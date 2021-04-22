import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getContacts,
  addContact,
  deleteContact,
  filterContacts,
} from './actions';

const contactsItems = createReducer([], {
  [getContacts]: (_, action) => action.payload,
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const filterContact = createReducer('', {
  [filterContacts]: (state, action) => action.payload,
});

const contactsReducer = combineReducers({
  items: contactsItems,
  filter: filterContact,
});

export { contactsReducer };
