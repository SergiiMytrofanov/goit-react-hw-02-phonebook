import React from 'react';

const ContactItem = ({ contact }) => {
  return (
    <li>
      {contact.name}: &nbsp;&nbsp; {contact.number}
    </li>
  );
};

export default ContactItem;
