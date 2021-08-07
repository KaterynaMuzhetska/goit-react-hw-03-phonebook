// Модули
import React from 'react';
import PropTypes from 'prop-types';

// Компоненты
import ContactListItem from '../ContactListItem/ContactListItem';

// Стили
import styles from '../ContactList/contactList.module.css';

const ContactList = ({ contacts, onDeletContact }) => (
  <ul className={styles.contactList}>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeletContact={onDeletContact}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeletContact: PropTypes.func.isRequired,
};

export default ContactList;
