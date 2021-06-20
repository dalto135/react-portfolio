import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Aboutme from './components/aboutme';
import Projects from './components/projects';
import Contactme from './components/contactme';
import Footer from './components/footer';
import './reset.css';
import './style.css';

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path='/' component={Aboutme}></Route>
      <Route exact path='/projects' component={Projects}></Route>
      <Route exact path='/contactme' component={Contactme}></Route>
      <Footer/>
    </Router>
  );
}

export default App;
