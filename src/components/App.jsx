// import { useState, useEffect } from 'react';
import { ContactsList } from './PhoneBook/ContactsList';
import { Filter } from './PhoneBook/Filter';
import { PhoneBook } from './PhoneBook/AddContact';
import { Box } from 'components/Box';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <Box as="main" p="4" width="620px" ml="auto" mr="auto" bg="secondaryText">
      <h1>Phonebook</h1>
      <PhoneBook />
      <Filter />
      <ContactsList />
      <ToastContainer position="top-center" autoClose={3000} />
    </Box>
  );
};
