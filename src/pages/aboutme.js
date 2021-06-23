import React from 'react';

function Aboutme() {
    return (
        <section id="about-me">
            <div className="title">
                <h1>About Me</h1>
                {/* <img src='./assets/images/headshot.jpg' id='headshot'> */}
            </div>
            
            <div className="content" id="me">
                <p>Highly motivated and technically skilled Full-Stack Developer looking for a challenging position in Web Development. Has a certificate from the Full-Stack Web Development Bootcamp at The Ohio State University and a Bachelor’s of Science degree in Neuroscience from The Ohio State University. Enjoys working with others to solve complex problems using development skills that include HTML, CSS, Javascript, SQL, Git, React.js and others, and possesses soft skills that include conflict resolution, effective communication, flexibility and humility in leadership. These experiences and certifications have given me the work ethic and analytical skills needed to pursue a career in Web Development and beyond.</p>
            </div>
        </section>
    );
}

export default Aboutme;