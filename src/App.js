import About from"./components/About/About";
import Home from"./components/Home/Home";
import Cantacts from"./components/Cantacts/Cantacts";

import {Route} from "react-router";
import { Link } from "react-router-dom";

import './App.css';
function App() {
  return (
    <div className="App">
      <div className="Toolbar">
      <Link to="home">Home</Link>
       <Link to="/about/like">About</Link>
       <Link to="/cantacts">Cantacts</Link>
      <Route path="/" component={Home} exact/>
      <Route path="/about" component={About}/>
      <Route path="/Cantacts" component={Cantacts}/>
   </div>
    </div>
  );
}

export default App;
