import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';
import { getStatusFilter, getContacts } from '../../redux/selectors';
import DynamicSort from '../DynamicSort/DynamicSort';
import Filter from '../Filter/Filter';
import { Title } from 'components/ContactForms/ContactForm';
import propTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li>
      {name}: {number} <button onClick={() => onRemove(id)}>Delete</button>
    </li>
  );
};

const ContactList = () => {
  const contacts = [...useSelector(getContacts)].sort(DynamicSort('name'));
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function handleRemoveContact(event) {
    return dispatch(deleteContact(event));
  }

  function getVisibleContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const visibleContacts = getVisibleContacts();
  if (contacts.length === 0) {
    return null;
  }
  return (
    <div>
      <>
        <Title style={{ marginLeft: '20px' }}>
          Find contact: {visibleContacts.length}
        </Title>
        <br></br>
        <Filter />
        <ul style={{ marginTop: '20px' }}>
          {visibleContacts.map(contact => (
            <ContactListItem
              {...contact}
              onRemove={handleRemoveContact}
              key={contact.id}
            />
          ))}
        </ul>
      </>
    </div>
  );
};

export default ContactList;

ContactListItem.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  phone: propTypes.string,
  onRemove: propTypes.func,
};
