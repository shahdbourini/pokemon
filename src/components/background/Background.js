import pickatsho from '../../img/pickatsho.png';
import Footer from '../footer/Footer';
import './style_background.css';

function Background() {
  return (
    <>
      <div className="row text mr-auto">
        <div className="col-6">
          <div className="p_div">
            <p>
              {' '}
              <b>Find</b> all your favorite <br /> <b>Pokemon</b>
            </p>

            <p className="p2">
              You can know the type of Pokemon, its strengths, disadvantages and
              abilities
            </p>

            <button className="Main-button btn btn-lg">See pokemons</button>
          </div>
        </div>
        <div className="col-6 ">
          <img src={pickatsho} alt="img" style={{ width: `102%` }} />
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Background;
