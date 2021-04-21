import { connect } from 'react-redux';
import { getContacts, deleteContact } from '../../redux/actions';
import styles from './ContactsList.module.scss';
import React, { Component } from 'react';

class ContactsList extends Component {
  componentDidMount() {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    console.log(storageContacts);
    if (storageContacts) {
      this.props.getContacts(storageContacts);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.contacts !== this.props.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    }
  }

  handleDelete = e => {
    this.props.deleteContact(e.target.id);
  };

  render() {
    const { contacts } = this.props;
    return (
      <div className={styles.contactsBox}>
        <ul>
          {contacts.length > 0 &&
            contacts.map(contact => (
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

const mapStateToProps = ({ items, filter }) => {
  return { contacts: items.filter(item => item.name.includes(filter)) };
};

const mapDispatchToProps = { getContacts, deleteContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
