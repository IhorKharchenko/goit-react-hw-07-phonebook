import { createAction, nanoid } from '@reduxjs/toolkit';

// export const addContact = (name, number) => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };

export const deleteContact = createAction('contacts/deleteContact');

// export const changeFilter = value => {
//   return {
//     type: 'filter/changeFilter',
//     payload: value,
//   };
// };

export const changeFilter = createAction('contacts/changeFilter');
