import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Aboutme from './pages/aboutme';
import Projects from './pages/projects';
import Contactme from './pages/contactme';
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
