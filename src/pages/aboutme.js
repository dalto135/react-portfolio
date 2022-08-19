import React from 'react';
import './pages.css';
import './aboutme.css';

function Aboutme() {
    return (
        <section className="page" id="aboutMe">
            <div className="pageTitle" id="aboutMeTitle">
                <h1>About Me</h1>
                {/* <img src='./assets/images/headshot.jpg' id='headshot'> */}
            </div>
            
            <div className="pageContent" id="aboutMeContent">
                <p>Highly motivated and technically skilled Software Engineer at Nationwide. Has a certificate from the Full-stack Web Development Bootcamp at The Ohio State University and a Bachelor’s degree in Neuroscience from The Ohio State University. Enjoys working with others to solve complex problems using development skills that include HTML, CSS, Javascript, SQL, Git, React.js and others, and possesses soft skills that include conflict resolution, effective communication, flexibility and humility in leadership. These experiences and certifications have given me the drive and analytical skills needed to succeed in my Software Engineering career and beyond.</p>
            </div>
        </section>
    );
}

export default Aboutme;
