import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsData } from 'redux/PhoneBookRedux/operathion';
import { getFilteredContacts } from 'redux/PhoneBookRedux/selector';

export const ContactList = () => {
const contacts = useSelector(getFilteredContacts);
const dispatch = useDispatch();
const handleDeleteUser = id => {
  dispatch(deleteContactsData(id))
};

  return (
    <ul style={{
      listStyle: 'none',
      fontSize:'20px',
    }}>
      {contacts.map(item => (
        <li key={item.id}>
          <p style={{
      margin: '10 auto'
    }}>{item.name}</p>
          <p style={{
      margin: '10 auto',
    }}>{item.number}</p>
          <button style={{
          color:"red",
          backgroundColor: "gray",
        }} onClick={() => handleDeleteUser(item.id)} type="button">Delete</button>
        </li>
      ))}
    </ul>
  );
};