import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './FilterItem/FilterItem';

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  addContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }]
    }));
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Телефонна книга</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Контакти</h2>
        <p>Пошук за іменем</p>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;
