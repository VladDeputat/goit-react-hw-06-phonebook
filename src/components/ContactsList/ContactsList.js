import { connect } from 'react-redux';
import { getContacts, deleteContact } from '../../redux/actions';
import styles from './ContactsList.module.scss';
import React, { Component } from 'react';

class ContactsList extends Component {
  componentDidMount() {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storageContacts) {
      this.props.getContacts(storageContacts);
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.props.contacts.items));
  }

  handleDelete = e => {
    this.props.deleteContact(e.target.id);
  };

  render() {
    const { items } = this.props.contacts;
    return (
      <div className={styles.contactsBox}>
        <ul>
          {items.length &&
            items.map(contact => (
              <li className={styles.listItem} key={contact.id}>
                {contact.name}: {contact.number}
                <button
                  type="button"
                  className={styles.btn}
                  onClick={this.handleDelete}
                  id={contact.id}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { contacts: state };
};

const mapDispatchToProps = { getContacts, deleteContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
