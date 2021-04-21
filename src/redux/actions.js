import {
  GETCONTACTS,
  ADDCONTACT,
  DELETECONTACT,
  FILTERCONTACTS,
} from './constants';
import { v4 as uuidv4 } from 'uuid';

const getContacts = contacts => ({
  type: GETCONTACTS,
  payload: contacts,
});

const addContact = contact => ({
  type: ADDCONTACT,
  payload: { id: uuidv4(), ...contact },
});

const deleteContact = id => ({
  type: DELETECONTACT,
  payload: id,
});

const filterContacts = value => ({
  type: FILTERCONTACTS,
  payload: value,
});
export { getContacts, addContact, deleteContact, filterContacts };
