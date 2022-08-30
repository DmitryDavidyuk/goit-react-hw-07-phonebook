import React from 'react';
import CSS from './Contacts.module.css';
import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../Redux/reducers';

const ContactsList = ({ contacts, onDelete }) => {
  const dispath = useDispatch();

  return (
    <ul className={CSS.contact}>
      {contacts.map(({ id, name, phone }) => (
        <li className={CSS.contactList} key={id}>
          <p>{name}:</p>
          <p>{phone}</p>
          <button type="button" onClick={() => onDelete(id)}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
