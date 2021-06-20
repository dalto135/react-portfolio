import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header id='header'>

            <div id="name">
                <h1>Dalton Wilkins</h1>
                
            </div>
            
            <div class='headshot'>
                {/* <img src='../assets/images/headshot.jpg' alt='headshot'></img> */}

                <div id="shortcuts">
                    <Link to='/'>About Me</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/contactme'>Contact Me</Link>
                    <a href="https://drive.google.com/file/d/19fEXc-UwH_rd4qKfTBPd_yd3_9uusd6c/view?usp=sharing" target="_blank" rel='noreferrer'>Resume</a>
                    {/* <!-- <a href="https://drive.google.com/file/d/14IgY0ERipLtSLQX5bAk-OVvs_JuXVkxk/view?usp=sharing" target="_blank">Brand Statement</a> --> */}
                </div>
            </div>

            <section id="image">
                <h1>A vision for the future</h1>
            </section>
            
        </header>

    );
}

export default Header;
