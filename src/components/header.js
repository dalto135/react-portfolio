import React from 'react';
import { Link } from 'react-router-dom';
import Headshot from '../assets/images/headshot.jpg';
import './components.css';
import './header.css';

function Header({toggleTheme}) {
    return (
        <div id='header-div'>
            <header>
                <div id="name">
                    <h1>Dalton Wilkins</h1>
                </div>
                
                <div className='headshot'>
                    <img src={Headshot} alt='headshot'/>

                    <div id="shortcuts">
                        <Link to='/'>About Me</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/contactme'>Contact Me</Link>
                        <a href='https://drive.google.com/file/d/19fEXc-UwH_rd4qKfTBPd_yd3_9uusd6c/view?usp=sharing' target='_blank' rel='noreferrer'>Resume</a>
                        {/* <a href='https://drive.google.com/file/d/14IgY0ERipLtSLQX5bAk-OVvs_JuXVkxk/view?usp=sharing' target='_blank' rel='noreferrer'>Brand Statement</a> */}
                    </div>
                    
                    <button onClick={toggleTheme} id="lightDarkButton">Light/Dark Mode</button>
                </div>
            </header>

            <section id="image">
                <h1>A vision for the future</h1>
            </section>
        </div>
    );
}

export default Header;
