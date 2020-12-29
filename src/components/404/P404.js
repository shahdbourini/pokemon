import img404 from "../../img/img404.png";
import Rocket from "../../img/Rocket.png";
import { useHistory } from 'react-router-dom'
import './style404.css';


function P404() {
  let history = useHistory()
  return (
    <>
<div className="background">
<img src={img404} className="img404" alt="img"/>
<img src={Rocket} className="rocket" alt="img"/>
  
<div className="text404">
<p> <span>The rocket team</span> has won this time.</p>
<button onClick={() => history.push('/pokemon')}>Return</button>
</div>
</div>
   
    </>
  );
}

export default P404;
