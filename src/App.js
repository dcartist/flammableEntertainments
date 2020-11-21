import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import EpsidodeListing from "./Components/Episodes/EpisodeListing"
function App() {
  return (
    <div className="App">
      
      <Route path="/episode" component={EpsidodeListing}></Route>
    </div>
  );
}

export default App;
