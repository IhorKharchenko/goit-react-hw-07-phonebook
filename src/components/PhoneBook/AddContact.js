import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { StyledForm, StyledLabel, StyledButton } from './PhoneBook.styled';

export const PhoneBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact(form.name.value, form.number.value));
    form.reset();
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
