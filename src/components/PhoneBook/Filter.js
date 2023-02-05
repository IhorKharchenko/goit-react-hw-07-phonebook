import { getFilter } from 'components/redux/selectors';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/filterSlice';
export const Filter = () => {
  const { filter } = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleFilterChange = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
