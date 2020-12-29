import './style.css';
import '../components/img_slide/style_slide.css';
import Slide from '../components/img_slide/Slide';
import Footer from '../components/footer/Footer';
import { UseDarkBody } from '../hooks';


function Legendaries() {
    UseDarkBody();
  return (
    < >
<div className="container" >

  <Slide top='35px' bottom='0px' title="Lengendaries" type="normal" url='https://pokeapi.co/api/v2/type/normal?limit=151' />
  <Slide top='140px' bottom='40px' title="Stronger" type="fighting" url='https://pokeapi.co/api/v2/type?limit=151' />
  <Slide top='124px' bottom='40px' title="Weaker" type="steel" url='https://pokeapi.co/api/v2/type?limit=200' />
   <Footer top='200px'/>

</div>

    </>
  );
}

export default Legendaries;
