import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {Routes, Route, useNavigate} from 'react-router-dom'
import { Education } from './routes/education';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Link } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes><Route path='/education' element={<Education/>} /></Routes> 
      </Router>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );

}

export default App;
