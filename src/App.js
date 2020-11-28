import './App.css';
import {Route, Link} from "react-router-dom";
import EpsidodeListing from "./Components/Episodes/EpisodeListing"
import Episode from "./Components/Episodes/EpisodeMain"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Navigation from "./Components/Navigation/Navigation"


function App() {
  return (
    <div className="App">
      <Navigation className="AppNav"></Navigation>
      <Route path="/" exact component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/episode" exact component={EpsidodeListing}></Route>
      <Route path="/episodes" exact component={EpsidodeListing}></Route>
      <Route path="/episode/id/:id" component={Episode}></Route>
    </div>

  
  );
}

export default App;
