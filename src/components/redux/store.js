import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './redusers';
import { contactsReduser } from './contactsSlice';
import { filterReduser } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },
});
