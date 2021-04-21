import { combineReducers } from 'redux';
import {
  GETCONTACTS,
  ADDCONTACT,
  DELETECONTACT,
  FILTERCONTACTS,
} from './constants';

const contactsItems = (state = [], action) => {
  switch (action.type) {
    case GETCONTACTS:
      return action.payload;
    case ADDCONTACT:
      return [...state, action.payload];
    case DELETECONTACT:
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};

const filterContacts = (state = '', action) => {
  switch (action.type) {
    case FILTERCONTACTS:
      return action.payload;
    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: contactsItems,
  filter: filterContacts,
});

export { contactsReducer };
