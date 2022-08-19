import React from 'react';
import './pages.css';
import './contactme.css';

function Contactme() {
    return (
        <section className="page" id="contactMe">
            <div className="pageTitle" id="contactMeTitle">
                <h1>Contact Me</h1>
            </div>
            
            <address className="pageContent" id="contactMeContent">
                <a href="tel:+16142577681">614-257-7681</a>
                <a href="mailto:daltongh@gmail.com">daltongh@gmail.com</a>
                <a href="https://www.linkedin.com/in/dalton-wilkins/" target="_blank" rel='noreferrer'>LinkedIn</a>
                <a href="https://github.com/dalto135" target="_blank" rel='noreferrer'>GitHub</a>
            </address>
        </section>
    );
}

export default Contactme;