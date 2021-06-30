import React from 'react';

function Project(props) {

    // const { title, link, screenshot, description, github } = props;

    return (
        <div id="code" className="small">
            <h2>{props.title}</h2>
            <a href={props.link} className="project" target="_blank" rel='noreferrer'>
                <img src={props.screenshot} alt={props.title}/>
            </a>
            <p>{props.description}</p>
            <a href={props.github} className="github" target="_blank" rel='noreferrer'>GitHub</a>
        </div>
    );
}

export default Project;