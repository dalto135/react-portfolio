import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Aboutme from './pages/aboutme';
import Projects from './pages/projects';
import Contactme from './pages/contactme';
import Footer from './components/footer';
import './style.css';

let parent = document.querySelector("html");

function setTheme() {
  let date = new Date();
  let time = date.getHours();

  if (time >= 8 && time < 21) {
    parent.setAttribute("id", "light");
  }
}

setTheme();

function toggleTheme() {
  if (parent.getAttribute("id") === "light") {
    parent.removeAttribute("id");
  }
  else {
    parent.setAttribute("id", "light");
  }
}

function App() {
  return (
    <Router>
      <Header toggleTheme={toggleTheme}/>
      <Route exact path='/' component={Aboutme}></Route>
      <Route exact path='/projects' component={Projects}></Route>
      <Route exact path='/contactme' component={Contactme}></Route>
      <Footer/>
    </Router>
  );
}

export default App;
