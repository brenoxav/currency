import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <header className="navbar">
    <NavLink exact to="/">
      <span>back</span>
    </NavLink>
    <span>forex today</span>
    <span>
      <span>mic</span>
      <span>opt</span>
    </span>
  </header>
);

export default Navbar;
