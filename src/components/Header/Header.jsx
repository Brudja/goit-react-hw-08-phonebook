
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
      <nav>
        <NavLink end to="/">Back home</NavLink>
        <ul>
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
