import React, { Component } from 'react';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import FilterContacts from './FilterContacts/FilterContacts';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <FilterContacts />
        <ContactsList />
      </div>
    );
  }
}

export default App;
