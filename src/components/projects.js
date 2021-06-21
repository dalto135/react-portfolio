import React from 'react';
import Project from './project';
import Screenshot1 from '../assets/images/global-lost-and-found.png';
import Screenshot2 from '../assets/images/dine-or-dash.png';
import Screenshot3 from '../assets/images/weather-dashboard.png';
import Screenshot4 from '../assets/images/employee-tracker.png';
import Screenshot5 from '../assets/images/coding-quiz-challenge.png';
import Screenshot6 from '../assets/images/tech-blog.png';

function Projects() {
    let titles = [
        'Global Lost and Found',
        'Dine or Dash',
        'Weather Dashboard',
        'Employee Tracker',
        'Coding Quiz Challenge',
        'Tech Blog'
    ];
    let links = [
        'https://glacial-fortress-45860.herokuapp.com/',
        'https://dalto135.github.io/dine-or-dash/',
        'https://dalto135.github.io/weather-dashboard/',
        'https://drive.google.com/file/d/1PRgjvLbEubjJbmaixVOPNbvKF6S-0zwB/view',
        'https://dalto135.github.io/coding-quiz-challenge/',
        'https://intense-sea-31464.herokuapp.com/'
    ];
    let descriptions = [
        'An web application that allows users to post and search for items that have been reported missing. Technologies used include Sequelize, Javascript, Handlebars, and MYSQL2.',
        'A webpage that prompts the user to enter a food dish and location, and displays a list of recipies and local restaurants that match their dish. Technologies used include HTML, CSS, Javascript, and API integration.',
        'A webpage that prompts the user to enter a city name, and displays current weather conditions for that city in addition to a 5 day forecast. Technologies used include HTML, CSS, Javascript, and API integration.',
        'A program that uses Node and Inquirer to manipulate a SQL database of employees, departments and employee roles. Technologies used include Javascript, Node.js, Inquirer, and Dotenv.',
        'A web application that presents an interactive Javascript quiz. The quiz is timed and time is deducted if a question is answered wrong. The quiz ends when all questions are answered or the timer runs out, and the user can store their score after typing in their initials.',
        'A social networking website that allows users to create an account, make blog posts, and leave comments on posts others have made. Users can go to their personal dashboards, where they can see a list of posts they have made and are prompted to make new posts.'
    ];
    let githubLinks = [
        'https://github.com/Youngin9210/Lost-Found',
        'https://github.com/dalto135/dine-or-dash',
        'https://github.com/dalto135/weather-dashboard',
        'https://github.com/dalto135/employee-tracker',
        'https://github.com/dalto135/coding-quiz-challenge',
        'https://github.com/dalto135/tech-blog'
    ];


    return (
        <section id="work-me">
            <div className="title">
                <h1>Projects</h1>
            </div>
            
            <div className="content" id="work">
                
                {/* Main projects */}
                <div className='big'>

                    {/* <div id="code" class="small">
                        <h1>Global Lost and Found</h1>
                        <a href="https://glacial-fortress-45860.herokuapp.com/" class="project" target="_blank" rel='noreferrer'>
                            <img src="./assets/images/globallostandfound.png" alt="Global Lost and Found Project"></img>
                        </a>
                        <p>An web application that allows users to post and search for items that have been reported missing. Technologies used include Sequelize, Javascript, Handlebars, and MYSQL2.</p>
                        <a href="https://github.com/Youngin9210/Lost-Found" class="github" target="_blank" rel='noreferrer'>GitHub</a>
                    </div> */}
                    <Project title={titles[0]} link={links[0]} screenshot={Screenshot1} description={descriptions[0]} githubLink={githubLinks[0]}/>
                </div>

                <div className='big'>

                    {/* <div id="wow" className="small">
                        <h1>Dine or Dash</h1>
                        <a href="https://dalto135.github.io/dine-or-dash/" className="project" target="_blank" rel='noreferrer'>
                            <img src="./assets/images/dineordash.png" alt="Dine Or Dash Project"></img>
                        </a>
                        <p>A webpage that prompts the user to enter a food dish and location, and displays a list of recipies and local restaurants that match their dish. Technologies used include HTML, CSS, Javascript, and API integration.</p>
                        <a href="https://github.com/dalto135/dine-or-dash" className="github" target="_blank" rel='noreferrer'>GitHub</a>
                    </div> */}
                    <Project title={titles[1]} link={links[1]} screenshot={Screenshot2} description={descriptions[1]} githubLink={githubLinks[1]}/>
                </div>
                
                {/* Row two projects */}
                <div className="big">

                    {/* <div id="project" className="small">
                        <h1>Weather Dashboard</h1>
                        <a href="https://dalto135.github.io/weather-dashboard/" className="project" target="_blank" rel='noreferrer'>
                            <img src="./assets/images/weatherdashboard.png" alt="Weather Dashboard Project"></img>
                        </a>
                        <p>A webpage that prompts the user to enter a city name, and displays current weather conditions for that city in addition to a 5 day forecast. Technologies used include HTML, CSS, Javascript, and API integration.</p>
                        <a href="https://github.com/dalto135/weather-dashboard" className="github" target="_blank" rel='noreferrer'>GitHub</a>
                    </div> */}
                    <Project title={titles[2]} link={links[2]} screenshot={Screenshot3} description={descriptions[2]} githubLink={githubLinks[2]}/>

                    {/* <div id="employee-tracker" className="small">
                        <h1>Employee Tracker</h1>

                        <a href="https://drive.google.com/file/d/1PRgjvLbEubjJbmaixVOPNbvKF6S-0zwB/view" className="project" target="_blank" rel='noreferrer'>
                            <img src="./assets/images/employee-tracker-screenshot.png" alt="Employee Tracker Project"></img>
                        </a>
                        <p>A program that uses Node and Inquirer to manipulate a SQL database of employees, departments and employee roles. Technologies used include Javascript, Node.js, Inquirer, and Dotenv.</p>
                        <a href="https://github.com/dalto135/employee-tracker" className="github" target="_blank" rel='noreferrer'>GitHub</a>
                    </div> */}
                    <Project title={titles[3]} link={links[3]} screenshot={Screenshot4} description={descriptions[3]} githubLink={githubLinks[3]}/>
                    
                </div>

                {/* Row three projects */}
                <div className="big">

                    {/* <div id="projectid1" className="small">
                        <h1>Work Day Scheduler</h1>
                        <a href="https://dalto135.github.io/work-day-scheduler/" className="project" target="_blank" rel='noreferrer'>
                            <img src="./assets/images/work-day-scheduler-screenshot.png" alt="Work Day Scheduler Project"></img>
                        </a>
                        <p>A daily planner that presents an hour by hour schedule of the day and allows the user to save events using local storage. Technologies used include HTML, CSS and Javascript.</p>
                        <a href="https://github.com/dalto135/work-day-scheduler" className="github" target="_blank" rel='noreferrer'>GitHub</a>
                    </div> */}
                    <Project title={titles[4]} link={links[4]} screenshot={Screenshot5} description={descriptions[4]} githubLink={githubLinks[4]}/>

                    {/* <div id="projectid2" className="small">
                        <h1>Password Generator</h1>
                        <a href="https://dalto135.github.io/password-generator/" className="project" target="_blank" rel='noreferrer'>
                            <img src="./assets/images/password-generator-screenshot.png" alt="Password Generator Project"></img>
                        </a>
                        <p>A simple program that presents the user with a series of prompts in order to create a random password of their specifications. Technologies used include HTML, CSS and Javascript.</p>
                        <a href="https://github.com/dalto135/password-generator" className="github" target="_blank" rel='noreferrer'>GitHub</a>
                    </div> */}
                    <Project title={titles[5]} link={links[5]} screenshot={Screenshot6} description={descriptions[5]} githubLink={githubLinks[5]}/>

                </div>
                
            </div>
            
        </section>
    );
}

export default Projects;