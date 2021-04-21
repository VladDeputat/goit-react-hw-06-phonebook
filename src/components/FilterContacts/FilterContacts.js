import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterContacts } from '../../redux/actions';
import styles from './FilterContacts.module.scss';

class FilterContacts extends Component {
  onFilterChange = e => {
    console.log(this.props);
    this.props.filterContacts(e.target.value);
  };
  render() {
    return (
      <label>
        <p className={styles.subtitle}>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          // value={this.props.contacts.filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          autoComplete="off"
          required
          onChange={this.onFilterChange}
        />
      </label>
    );
  }
}

const mapStateToProps = state => {
  return { contacts: state };
};

const mapDispatchToProps = { filterContacts };

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);
