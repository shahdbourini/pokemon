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
              onClick={() => (window.location.href = '/pokemon')}
              to="/pokemon"
              activeClassName="is-active"
              className="nav-link"
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink
              onClick={() => (window.location.href = '/Pokedex')}
              to="/Pokedex"
              activeClassName="is-active"
              className="nav-link"
            >
              Pokédex
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink
              onClick={() => (window.location.href = '/Legendaries')}
              to="/Legendaries"
              activeClassName="is-active"
              className="nav-link"
            >
              Legendaries
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink
              onClick={() => (window.location.href = '/Documentation')}
              to="/Documentation"
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
