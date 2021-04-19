import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// const reducer = (state = {}, action) => state;
const reducer = () => ({
  groups: [],
  courses: [{ name: 'HTML' }, { name: 'HTML2' }],
});

const store = createStore(reducer, composeWithDevTools());

export default store;
