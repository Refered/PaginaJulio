import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/">Inicio</Link>
        </li>
        <li className="nav-link">
          <Link to="/content">To do list</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">Conversor de unidades</Link>
        </li>
        <li className="nav-link">
        <Link to="/pokemon">Pokemon random</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;