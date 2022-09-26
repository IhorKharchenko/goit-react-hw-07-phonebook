// import { useState } from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'components/redux/actions';
import { StyledForm, StyledLabel, StyledButton } from './PhoneBook.styled';

export const PhoneBook = ({ onSubmit }) => {
  // const [id, setId] = useState('');
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  // const handleChange = event => {
  //   const { name, value } = event.currentTarget;
  //   // setId(nanoid());
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // onSubmit({ id, name, number });
    dispatch(addContact(form.name.value, form.number.value));
    // stateReset();
    form.reset();
  };

  // const stateReset = () => {
  //   // setId('');
  //   setName('');
  //   setNumber('');
  // };

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
          // value={name}
          // onChange={handleChange}
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
          // value={number}
          // onChange={handleChange}
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
