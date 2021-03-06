import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <header className="navbar">
    <NavLink exact to="/">
      <span className="material-icons-outlined">
        arrow_back_ios
      </span>
    </NavLink>
    <span className="navbar-title">forex today</span>
    <span>
      <span className="material-icons-outlined navbar-icons">
        mic
      </span>
      <span className="material-icons-outlined navbar-icons">
        settings
      </span>
    </span>
  </header>
);

export default Navbar;
