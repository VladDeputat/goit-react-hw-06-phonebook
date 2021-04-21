import { combineReducers } from 'redux';
import {
  GETCONTACTS,
  ADDCONTACT,
  DELETECONTACT,
  FILTERCONTACTS,
} from './constants';

// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

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
