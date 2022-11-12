import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutOperation } from 'redux/PhoneBookRedux/Registraishon/RegOperethion';

export function UserMenu() {
  const name = useSelector(state => state.registr.user?.name);
  const email = useSelector(state => state.registr.user?.email);
  const dispatch = useDispatch();

  return (
    <>
      <ul className={css.link}>
        <li>
          <p>Hello {name}</p>
          <p>Email {email}</p>
          <button type="button" onClick={() => dispatch(logoutOperation())}>
            Logout
          </button>
        </li>
      </ul>
    </>
  );
}
