import About from"./components/About/About";
import Home from"./components/Home/Home";
import Cantacts from"./components/Cantacts/Cantacts";
import {Route} from "react-router";
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
         <Link to="home">Home</Link>
       <Link to="/about/like">About</Link>
       <Link to="/cantacts">Cantacts</Link>
      <Route path="/" component={Home} exact/>
      <Route path="/about" component={About}/>
      <Route path="/Cantacts" component={Cantacts}/>
    
     
     {/* <Home/>
     
     <Cantacts/> */}
   
    </div>
  );
}

export default App;
