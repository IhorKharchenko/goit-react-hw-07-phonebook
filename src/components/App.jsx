// import { useState, useEffect } from 'react';
import { ContactsList } from './PhoneBook/ContactsList';
import { Filter } from './PhoneBook/Filter';
import { PhoneBook } from './PhoneBook/AddContact';
import { Box } from 'components/Box';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// };

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
