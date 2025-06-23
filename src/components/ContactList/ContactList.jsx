import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsOps';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={styles.item}>
          <span>{name}: {phone}</span>
          <button
            className={styles.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
