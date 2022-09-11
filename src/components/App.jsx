import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ContactsList } from './PhoneBook/ContactsList';
import { Filter } from './PhoneBook/Filter';
import { PhoneBook } from './PhoneBook/AddContact';
import { Box } from 'components/Box';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    contacts.some(contact => contact.name === data.name)
      ? toast.warn(`${data.name} is alredy in your contacts`)
      : setContacts(prevState => [data, ...prevState]);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState => [
      ...prevState.filter(contact => contact.id !== contactId),
    ]);
  };

  return (
    <Box as="main" p="4" width="620px" ml="auto" mr="auto" bg="secondaryText">
      <h1>Phonebook</h1>
      <PhoneBook onSubmit={formSubmitHandler} />
      <Filter
        filter={filter}
        onChange={event => setFilter(event.currentTarget.value)}
      />
      <ContactsList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
      <ToastContainer position="top-center" autoClose={3000} />
    </Box>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};
