import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const getContacts = createAction('contacts/getContacts');

const addContact = createAction('contacts/addContact', contact => {
  return {
    payload: { id: uuidv4(), ...contact },
  };
});

const deleteContact = createAction('contacts/deleteContact');
const filterContacts = createAction('contacts/filterContacts');

export { getContacts, addContact, deleteContact, filterContacts };
