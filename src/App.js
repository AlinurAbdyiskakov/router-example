import About from"./components/About/About";
import Home from"./components/Home/Home";
import Cantacts from"./components/Cantacts/Cantacts";
import Jaz from"./components/Jaz/Jaz";
import Rep from "./components/Rep/Rep"
import Bass from "./components/Bass/Bass"
import Mashina from"./components/Mashina/Mashina";
import Jam from"./components/Jam/Jam";


import {Route} from "react-router";
import { Link } from "react-router-dom";
import logo from "./imges/logo.svg"
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="Toolbar">
      <img src={logo} alt="animal"/>
      <Link to="/">Home</Link>
       <Link to="/about/like">About</Link>
       <Link to="/cantacts">Cantacts</Link>

     
   </div>
   <div className="Drower">
   <Link to="/jaz">Джаз</Link>
       <Link to="/rep">Хип-хоп-музыка</Link>
       <Link to="/mashina">Эектроная музука</Link>
       <Link to="/bass">Басс</Link>
       <Link to="/jam">Ара́бская му́зыка</Link>
       <Link to="/cantacts">Cantacts</Link>
   </div>
   <div className="dom">
     <Route path="/" component={Home} exact/>
      <Route path="/about" component={About}/>
      <Route path="/Cantacts" component={Cantacts}/>
      <Route path="/jaz" component={Jaz}/>
      <Route path="/bass" component={Bass}/> 
      <Route path="/rep" component={Rep}/> 
      <Route path="/jam" component={Jam}/> 
      <Route path="/mashina" component={Mashina}/></div>  


    </div>
  );
}

export default App;
