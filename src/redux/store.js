import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { contactsReducer } from './reducers';
// const reducer = (state = {}, action) => state;
// const reducer = (state = { ...initialState }, action) => state;

const store = createStore(contactsReducer, composeWithDevTools());

export default store;
