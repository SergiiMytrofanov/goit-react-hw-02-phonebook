import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = (event) => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number, contacts } = this.state;
    if (name.trim() === '' || number.trim() === '') return;

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim()
    };

    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: ''
    });
  };

  render() {
    const { name, number, contacts } = this.state;

    return (
      <div>
        <h1>Телефонна книга</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад, Адріан, Джейкоб Мерсер, Шарль де Батц де Кастельмор д'Артаньян"
            required
            value={name}
            onChange={this.handleNameChange}
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефону повинен складатися з цифр і може містити пробіли, тире, круглі дужки та починатися з +"
            required
            value={number}
            onChange={this.handleNumberChange}
          />
          <button type="submit">Додати контакт</button>
        </form>
        <ol>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: &nbsp;&nbsp; {contact.number}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
