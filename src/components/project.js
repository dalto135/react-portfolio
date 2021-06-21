import React from 'react';

function Project({title, link, screenshot, description, githubLink}) {
    return (
        <div id="code" className="small">
            <h1>{title}</h1>
            <a href={link} className="project" target="_blank" rel='noreferrer'>
                <img src={screenshot} alt={title}></img>
            </a>
            <p>{description}</p>
            <a href={githubLink} className="github" target="_blank" rel='noreferrer'>GitHub</a>
        </div>
    );
}

export default Project;