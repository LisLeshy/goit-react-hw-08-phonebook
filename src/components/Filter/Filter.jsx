import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { Input } from 'components/ContactForms/ContactForm';

const Filter = () => {
  const filter = useSelector(state => state.filters);
  const dispatch = useDispatch();
  function handleFilterChange(filter) {
    dispatch(setFilter(filter));
  }

  return (
    <Input
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => handleFilterChange(target.value)}
      placeholder="Enter info for seach"
    />
  );
};

export default Filter;
