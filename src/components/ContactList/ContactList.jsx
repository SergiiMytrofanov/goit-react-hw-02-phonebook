import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ol>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: &nbsp;&nbsp; {contact.number}
          &nbsp;&nbsp;
          <button type="button" onClick={() => onDeleteContact(contact.id)}>
            Видалити
          </button>
        </li>
      ))}
    </ol>
  );
};

export default ContactList;
