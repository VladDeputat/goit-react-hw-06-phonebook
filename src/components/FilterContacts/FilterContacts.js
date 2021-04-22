import { connect } from 'react-redux';
import { filterContacts } from '../../redux/actions';
import styles from './FilterContacts.module.scss';

const FilterContacts = ({ filter, filterContacts }) => {
  const onFilterChange = e => {
    filterContacts(e.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <label>
        <p className={styles.subtitle}>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          // value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          autoComplete="off"
          required
          onChange={onFilterChange}
        />
      </label>
    </div>
  );
};

const mapStateToProps = state => {
  return { filter: state.filter };
};

export default connect(mapStateToProps, { filterContacts })(FilterContacts);
