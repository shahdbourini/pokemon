import Home from "./pages/Home";
import Pokédex from "./pages/Pokédex";
import Legendaries from "./pages/Legendaries";
import Header from "./components/header/Header";
import P404 from "./components/404/P404";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <div >


    <BrowserRouter >
        <Switch>

        <Route exact path="/">
        <Header/>
            <Home/>
          </Route>

          <Route exact path="/pokedex" >
          <Header/>
            <Pokédex/>
          </Route>

          <Route exact path="/legendaries">
          <Header/>
            <Legendaries  />
          </Route>

          <Route exact path="/documentation">
          <P404/>
          </Route>

        

        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
