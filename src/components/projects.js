import React from 'react';

function Projects() {
    return (
        <section id="work-me">
            <div class="title">
                <h1>Work</h1>
            </div>
            
            <div class="content" id="work">
                
                {/* Main projects */}
                <div class='big'>

                    <div id="code" class="small">
                        <h1>Global Lost and Found</h1>
                        <a href="https://glacial-fortress-45860.herokuapp.com/" class="project" target="_blank" rel='noreferrer'>
                            <img src="./assets/images/globallostandfound.png" alt="Global Lost and Found Project"></img>
                        </a>
                        <p>An web application that allows users to post and search for items that have been reported missing. Technologies used include Sequelize, Javascript, Handlebars, and MYSQL2.</p>
                        <a href="https://github.com/Youngin9210/Lost-Found" class="github" target="_blank" rel='noreferrer'>GitHub</a>
                    </div>
                </div>

                <div class='big'>

                    <div id="wow" class="small">
                        <h1>Dine or Dash</h1>
                        <a href="https://dalto135.github.io/dine-or-dash/" class="project" target="_blank" rel='noreferrer'>
                            <img src="./assets/images/dineordash.png" alt="Dine Or Dash Project"></img>
                        </a>
                        <p>A webpage that prompts the user to enter a food dish and location, and displays a list of recipies and local restaurants that match their dish. Technologies used include HTML, CSS, Javascript, and API integration.</p>
                        <a href="https://github.com/dalto135/dine-or-dash" class="github" target="_blank" rel='noreferrer'>GitHub</a>
                    </div>
                </div>
                
                {/* Row two projects */}
                <div class="big">

                    <div id="project" class="small">
                        <h1>Weather Dashboard</h1>
                        <a href="https://dalto135.github.io/weather-dashboard/" class="project" target="_blank" rel='noreferrer'>
                            <img src="./assets/images/weatherdashboard.png" alt="Weather Dashboard Project"></img>
                        </a>
                        <p>A webpage that prompts the user to enter a city name, and displays current weather conditions for that city in addition to a 5 day forecast. Technologies used include HTML, CSS, Javascript, and API integration.</p>
                        <a href="https://github.com/dalto135/weather-dashboard" class="github" target="_blank" rel='noreferrer'>GitHub</a>
                    </div>

                    <div id="employee-tracker" class="small">
                        <h1>Employee Tracker</h1>

                        <a href="https://drive.google.com/file/d/1PRgjvLbEubjJbmaixVOPNbvKF6S-0zwB/view" class="project" target="_blank" rel='noreferrer'>
                            <img src="./assets/images/employee-tracker-screenshot.png" alt="Employee Tracker Project"></img>
                        </a>

                        

                        <p>A program that uses Node and Inquirer to manipulate a SQL database of employees, departments and employee roles. Technologies used include Javascript, Node.js, Inquirer, and Dotenv.</p>
                        <a href="https://github.com/dalto135/employee-tracker" class="github" target="_blank" rel='noreferrer'>GitHub</a>
                    </div>
                    
                </div>

                {/* Row three projects */}
                <div class="big">

                    <div id="projectid1" class="small">
                        <h1>Work Day Scheduler</h1>
                        <a href="https://dalto135.github.io/work-day-scheduler/" class="project" target="_blank" rel='noreferrer'>
                            <img src="./assets/images/work-day-scheduler-screenshot.png" alt="Work Day Scheduler Project"></img>
                        </a>
                        <p>A daily planner that presents an hour by hour schedule of the day and allows the user to save events using local storage. Technologies used include HTML, CSS and Javascript.</p>
                        <a href="https://github.com/dalto135/work-day-scheduler" class="github" target="_blank" rel='noreferrer'>GitHub</a>
                    </div>

                    <div id="projectid2" class="small">
                        <h1>Password Generator</h1>
                        <a href="https://dalto135.github.io/password-generator/" class="project" target="_blank" rel='noreferrer'>
                            <img src="./assets/images/password-generator-screenshot.png" alt="Password Generator Project"></img>
                        </a>
                        <p>A simple program that presents the user with a series of prompts in order to create a random password of their specifications. Technologies used include HTML, CSS and Javascript.</p>
                        <a href="https://github.com/dalto135/password-generator" class="github" target="_blank" rel='noreferrer'>GitHub</a>
                    </div>

                </div>
                
            </div>
        </section>
    );
}

export default Projects;