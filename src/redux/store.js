// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { contactsReducer } from './reducers';

// const store = createStore(contactsReducer, composeWithDevTools());
const store = configureStore({
  reducer: contactsReducer,
});

export default store;
