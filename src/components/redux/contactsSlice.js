import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const contactsState = [];
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (state.some(contact => contact.name === action.payload.name)) {
          toast.warn(`${action.payload.name} is alredy in your contacts`);
        } else {
          state.push(action.payload);
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
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
