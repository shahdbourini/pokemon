import './style_nav.css';
import { NavLink, BrowserRouter } from 'react-router-dom';

function Navbar() {
  // let history = useHistory();
  return (
    <>
      <BrowserRouter>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <NavLink
              onClick={() => (window.location.href = '/')}
              to="/"
              activeClassName="is-active"
              className="nav-link"
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink
              onClick={() => (window.location.href = '/pokedex')}
              to="/pokedex"
              activeClassName="is-active"
              className="nav-link"
            >
              Pokédex
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink
              onClick={() => (window.location.href = '/legendaries')}
              to="/legendaries"
              activeClassName="is-active"
              className="nav-link"
            >
              Legendaries
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink
              onClick={() => (window.location.href = '/documentation')}
              to="/documentation"
              activeClassName="is-active"
              className="nav-link"
            >
              Documentation
            </NavLink>
          </li>
        </ul>
      </BrowserRouter>
    </>
  );
}

export default Navbar;
