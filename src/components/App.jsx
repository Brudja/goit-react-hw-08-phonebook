import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsData } from 'redux/PhoneBookRedux/operathion';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {

 const dispatch =  useDispatch()
  useEffect(()=>{
    dispatch(getContactsData())
  },[dispatch])

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
        margin: "30px"
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>
  );
}
