// Модули
import React from 'react';
import PropTypes from 'prop-types';

// Стили
import styles from '../Filter/filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input
        className={styles.filterInput}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
