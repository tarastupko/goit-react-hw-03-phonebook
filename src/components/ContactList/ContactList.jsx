import React from "react";
import PropTypes from 'prop-types';

import { Button } from 'components/ContactForm/ContactForm.styled';
import { List, ListItem, ContactInfo, ContactName, ContactNumber } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteBtn }) => (
<List>
  {contacts.map(contact => (
    <ListItem key={contact.id}>
      <ContactInfo>
        <ContactName>☎ {contact.name}:</ContactName>
        <ContactNumber>{contact.number}</ContactNumber>
      </ContactInfo>
      <Button onClick={() => onDeleteBtn(contact.id)}>Delete</Button>
    </ListItem>
  ))}
</List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteBtn: PropTypes.func.isRequired,
};

