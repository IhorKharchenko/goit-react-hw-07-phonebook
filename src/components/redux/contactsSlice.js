import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
// { id: '1', name: 'Ihor', number: '0956648143' }
const contactsState = {
  contacts: [],
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (
          state.contacts.some(contact => contact.name === action.payload.name)
        ) {
          toast.warn(`${action.payload.name} is alredy in your contacts`);
        } else {
          state.contacts.push(action.payload);
        }
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
