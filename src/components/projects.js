import React from 'react';
import Project from './project';
import Screenshot1 from '../assets/images/global-lost-and-found.png';
import Screenshot2 from '../assets/images/dine-or-dash.png';
import Screenshot3 from '../assets/images/tech-blog.png';
import Screenshot4 from '../assets/images/employee-tracker.png';
import Screenshot5 from '../assets/images/weather-dashboard.png';
import Screenshot6 from '../assets/images/coding-quiz-challenge.png';


function Projects() {
    let titles = [
        'Global Lost and Found',
        'Dine or Dash',
        'Tech Blog',
        'Employee Tracker',
        'Weather Dashboard',
        'Coding Quiz Challenge',
        
    ];
    let links = [
        'https://glacial-fortress-45860.herokuapp.com/',
        'https://dalto135.github.io/dine-or-dash/',
        'https://intense-sea-31464.herokuapp.com/',
        'https://drive.google.com/file/d/1PRgjvLbEubjJbmaixVOPNbvKF6S-0zwB/view',
        'https://dalto135.github.io/weather-dashboard/',
        'https://dalto135.github.io/coding-quiz-challenge/',
        
    ];
    let descriptions = [
        'An web application that allows users to post and search for items that have been reported missing. Technologies used include Sequelize, Javascript, Handlebars, and MYSQL2.',
        'A webpage that prompts the user to enter a food dish and location, and displays a list of recipies and local restaurants that match their dish. Technologies used include HTML, CSS, Javascript, and API integration.',
        'A social networking website that allows users to create an account, make blog posts, and leave comments on posts others have made. Users can go to their personal dashboards, where they can see a list of posts they have made and are prompted to make new posts.',
        'A program that uses Node and Inquirer to manipulate a SQL database of employees, departments and employee roles. Technologies used include Javascript, Node.js, Inquirer, and Dotenv.',
        'A webpage that prompts the user to enter a city name, and displays current weather conditions for that city in addition to a 5 day forecast. Technologies used include HTML, CSS, Javascript, and API integration.',
        'A web application that presents an interactive Javascript quiz. The quiz is timed and time is deducted if a question is answered wrong. The quiz ends when all questions are answered or the timer runs out, and the user can store their score after typing in their initials.',
    ];
    let githubLinks = [
        'https://github.com/Youngin9210/Lost-Found',
        'https://github.com/dalto135/dine-or-dash',
        'https://github.com/dalto135/tech-blog',
        'https://github.com/dalto135/employee-tracker',
        'https://github.com/dalto135/weather-dashboard',
        'https://github.com/dalto135/coding-quiz-challenge'
    ];


    return (
        <section id="work-me">
            <div className="title">
                <h1>Projects</h1>
            </div>
            
            <div className="content" id="work">
                
                {/* Row one projects */}
                <div className='big'>

                    <Project title={titles[0]} link={links[0]} screenshot={Screenshot1} description={descriptions[0]} githubLink={githubLinks[0]}/>

                    <Project title={titles[1]} link={links[1]} screenshot={Screenshot2} description={descriptions[1]} githubLink={githubLinks[1]}/>
               
                </div>

                <div className='big'>

                </div>
                
                {/* Row two projects */}
                <div className="big">

                    <Project title={titles[2]} link={links[2]} screenshot={Screenshot3} description={descriptions[2]} githubLink={githubLinks[2]}/>

                    <Project title={titles[3]} link={links[3]} screenshot={Screenshot4} description={descriptions[3]} githubLink={githubLinks[3]}/>
                    
                </div>

                {/* Row three projects */}
                <div className="big">

                    <Project title={titles[4]} link={links[4]} screenshot={Screenshot5} description={descriptions[4]} githubLink={githubLinks[4]}/>

                    <Project title={titles[5]} link={links[5]} screenshot={Screenshot6} description={descriptions[5]} githubLink={githubLinks[5]}/>

                </div>
                
            </div>
            
        </section>
    );
}

export default Projects;