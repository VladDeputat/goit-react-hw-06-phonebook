import { createAction } from '@reduxjs/toolkit';
import {
  GETCONTACTS,
  ADDCONTACT,
  DELETECONTACT,
  FILTERCONTACTS,
} from './constants';
import { v4 as uuidv4 } from 'uuid';

const getContacts = createAction(GETCONTACTS);

const addContact = createAction(ADDCONTACT, contact => {
  return {
    payload: { id: uuidv4(), ...contact },
  };
});

const deleteContact = createAction(DELETECONTACT);
const filterContacts = createAction(FILTERCONTACTS);

export { getContacts, addContact, deleteContact, filterContacts };
