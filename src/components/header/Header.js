import logo from "../../img/logo.png"
import Navbar from "../navbar/Navbar"
import './style_header.css';

function Header() {
  return (
    < >

<nav className="navbar navbar-expand-md fixed-top navbar-light nav">
    <div className="container">
        <img className="navbar-brand" src={logo} alt="logo"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse design" id="navbar1" >
         <Navbar/>
        </div>
    </div>
</nav>
 <div className="sticky-top hidden-spacer ">  
 </div> 


    </>
  );
}

export default Header;
