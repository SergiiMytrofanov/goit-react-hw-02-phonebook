import React from 'react';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <ol>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ol>
  );
};

export default ContactList;
