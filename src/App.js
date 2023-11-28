import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Aboutme from './pages/aboutme';
import Projects from './pages/projects';
import Contactme from './pages/contactme';
import Footer from './components/footer';
import './style.css';

let html_element = document.querySelector("html");

function toggleTheme() {
  if (html_element.getAttribute("id") === "light") {
    html_element.removeAttribute("id");
  }
  else {
    html_element.setAttribute("id", "light");
  }
}

function setTheme() {
  let date = new Date();
  let time = date.getHours();

  if (time >= 8 && time < 21) {
    toggleTheme();
  }
}

setTheme();

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
