
import './style_search.css';

function Search(props) {
  return (
    <>
      <div className="search  ">
        <span>
          800 <b>pokemons</b> for you to choose your favorite{' '}
        </span>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={props.input}
          onChange={props.handleOnChange}
        />
      </div>
    </>
  );
}

export default Search;
