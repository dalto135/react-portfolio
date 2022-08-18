import React, { createContext, useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Aboutme from './pages/aboutme';
import Projects from './pages/projects';
import Contactme from './pages/contactme';
import Footer from './components/footer';
import './style.css';
// import './styleLightMode.css';

export const themeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("dark");
  // const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={ theme }>
        <Router>
          <Header/>
          <Route exact path='/' component={Aboutme}></Route>
          <Route exact path='/projects' component={Projects}></Route>
          <Route exact path='/contactme' component={Contactme}></Route>
          <Footer/>
        </Router>
      </div>
    </themeContext.Provider>
    
  );
}

export default App;
