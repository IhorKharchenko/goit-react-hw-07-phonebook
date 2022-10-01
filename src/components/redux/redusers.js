import { toast } from 'react-toastify';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, changeFilter, deleteContact } from './actions';

const initialState = {
  contacts: [],
  filter: '',
};
// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case addContact.type: {
//       if (
//         state.contacts.some(contact => contact.name === action.payload.name)
//       ) {
//         toast.warn(`${action.payload.name} is alredy in your contacts`);
//       } else {
//         return {
//           ...state,
//           contacts: [...state.contacts, action.payload],
//         };
//       }
//       break;
//     }
//     case deleteContact.type: {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     case changeFilter.type: {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

export const rootReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    if (state.contacts.some(contact => contact.name === action.payload.name)) {
      toast.warn(`${action.payload.name} is alredy in your contacts`);
    } else {
      state.contacts.push(action.payload);
    }
  },
  [deleteContact]: (state, action) => {
    // return {
    //   ...state,
    //   contacts: state.contacts.filter(contact => contact.id !== action.payload),
    // };
    const index = state.contacts.findIndex(
      contact => contact.id === action.payload
    );
    state.contacts.splice(index, 1);
  },
  [changeFilter]: (state, action) => {
    state.filter = action.payload;
  },
});
