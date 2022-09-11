import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactsList } from './PhoneBook/ContactsList';
import { Filter } from './PhoneBook/Filter';
import { PhoneBook } from './PhoneBook/AddContact';
import { Box } from 'components/Box';
export class App extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    filter: PropTypes.string,
  };
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    // const parsedContacts = JSON.parse(contacts);
    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }
  // console.log(parsedContacts);

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  formSubmitHandler = data => {
    this.state.contacts.some(contact => contact.name === data.name)
      ? alert(`${data.name} is alredy in your contacts`)
      : this.setState(prevState => ({
          contacts: [data, ...prevState.contacts],
        }));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <Box as="main" p="4" width="620px" ml="auto" mr="auto" bg="secondaryText">
        <h1>Phonebook</h1>
        <PhoneBook onSubmit={this.formSubmitHandler} />
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}
