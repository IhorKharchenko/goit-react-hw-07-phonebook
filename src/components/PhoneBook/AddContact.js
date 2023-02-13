import { getContacts } from 'components/redux/selectors';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from './Operations';
import { StyledForm, StyledLabel, StyledButton } from './PhoneBook.styled';

export const PhoneBook = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const newContact = {
      name: form.name.value,
      number: form.number.value,
    };

    if (contacts.some(contact => contact.name === newContact.name)) {
      toast.warn(`${newContact.name} is alredy in your contacts`);
      return;
    } else if (contacts.some(contact => contact.number === newContact.number)) {
      toast.warn(`${newContact.number} is alredy in your contacts`);
      return;
    } else {
      dispatch(addContact(newContact));
      form.reset();
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLabel>
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};
PhoneBook.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
