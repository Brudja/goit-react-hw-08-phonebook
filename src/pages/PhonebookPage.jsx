import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { getContactsData } from 'redux/PhoneBookRedux/operathion';

const { useEffect } = require('react');
const { useDispatch } = require('react-redux');


export const Phonebook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsData());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        margin: '30px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
