import './style_nav.css';
import { NavLink, BrowserRouter,useHistory } from 'react-router-dom';

function Navbar() {
  let history = useHistory();
  return (
    <>
      <BrowserRouter>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <NavLink
              onClick={() => history.push("/") }
              to="/"
              activeClassName="is-active"
              className="nav-link"
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink
              onClick={() => history.push("/pokedex")}
              to="/pokedex"
              activeClassName="is-active"
              className="nav-link"
            >
              Pokédex
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink
              onClick={() => history.push("/legendaries")}
              to="/legendaries"
              activeClassName="is-active"
              className="nav-link"
            >
              Legendaries
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink
              onClick={() => history.push(  '/documentation')}
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
