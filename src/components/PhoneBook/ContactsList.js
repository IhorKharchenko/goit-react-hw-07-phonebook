import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { StyledButton, StyledList, StyledListItem } from './PhoneBook.styled';
import { getContacts, getFilter } from '../redux/selectors';
import { deleteContact } from '../redux/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const getFilteredContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const { contacts } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);
  const visibleContacts = getFilteredContacts(contacts, filter);
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <h2>Contacts</h2>
      <StyledList>
        {visibleContacts.map(({ id, name, number }) => (
          <StyledListItem key={id}>
            <span>{name}: </span>
            <span>{number}</span>
            <StyledButton type="button" onClick={() => handleDelete(id)}>
              Delete contact
            </StyledButton>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
