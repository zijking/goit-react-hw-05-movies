import { NavLink } from 'react-router-dom';
import s from './AppNavBar.module.css';

function AppNavBar() {
  return (
    <header className={s.header}>
      <nav>
        <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
          Home
        </NavLink>

        <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
export default AppNavBar;
