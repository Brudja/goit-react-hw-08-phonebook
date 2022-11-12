
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from "./Header.module.css"

export const Header = () => {
  
  const activeClassNameNav = ({ isActive }) =>
    isActive ? css.active : css.link;
  const token = useSelector(state => state.registr.token);

  return (
    <header>
      <nav className={css.navHeader}>
        <NavLink end to="/" className={css.Home}>Back home</NavLink>
        <ul className={css.listHeader}>
          {token ? (
            <>
              <li>
                <NavLink to="/phonebook" className={activeClassNameNav}>
                  Phonebook
                </NavLink>
              </li>
              <li>
                <UserMenu />
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/registration" className={activeClassNameNav}>
                  Registration
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className={activeClassNameNav}>
                  Autorithation{' '}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
