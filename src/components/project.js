import React from 'react';
import '../style.css';
import './components.css';
import './project.css';

function Project(props) {
    return (
        <div className="project">
            <h2>{props.title}</h2>
            <img src={props.screenshot} alt={props.title}/>
            <p>{props.description}</p>
            <a href={props.link} className="deployedProject" target="_blank" rel='noreferrer'>Deployed Project</a>
            <a href={props.github} className="github" target="_blank" rel='noreferrer'>GitHub</a>
        </div>
    );
}

export default Project;