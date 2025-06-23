import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        className={styles.input}
        type="tel"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="Phone"
        required
      />
      <button className={styles.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
