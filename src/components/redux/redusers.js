import { toast } from 'react-toastify';

const initialState = {
  contacts: [],
  filter: '',
};
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      if (
        state.contacts.some(contact => contact.name === action.payload.name)
      ) {
        toast.warn(`${action.payload.name} is alredy in your contacts`);
      } else {
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
      }
      break;
    }
    case 'contacts/deleteContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }
    case 'filter/changeFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};
