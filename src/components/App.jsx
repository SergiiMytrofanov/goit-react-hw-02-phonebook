import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, contacts } = this.state;
    if (name.trim() === '') return;

    const newContact = {
      id: nanoid(),
      name: name.trim()
    };

    this.setState({
      contacts: [...contacts, newContact],
      name: ''
    });
  };

  render() {
    const { name, contacts } = this.state;

    return (
      <div>
        <h1>Телефонна книга</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleNameChange}
          />
          <button type="submit">Додати контакт</button>
        </form>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
