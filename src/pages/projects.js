import React from 'react';
import Project from '../components/project';
import './pages.css';
import './projects.css';

import BreadExchange from '../assets/images/bread-exchange.png';
import GlobalLostAndFound from '../assets/images/global-lost-and-found.png';
import DineOrDash from '../assets/images/dine-or-dash.png';
import PasswordGenerator from '../assets/images/password-generator.png'
import WeatherDashBoard from '../assets/images/weather-dashboard.png';
import GoogleBooksSearch from '../assets/images/google-books-search.png';
import TechBlog from '../assets/images/tech-blog.png';
import CodingQuizChallenge from '../assets/images/coding-quiz-challenge.png';
import EmployeeTracker from '../assets/images/employee-tracker.png';




function Projects() {

    let projects = [
        {
            title: 'Bread Exchange',
            link: 'https://bread-exchange-123.herokuapp.com/#/',
            screenshot: BreadExchange,
            description: 'A MERN stack webpage that allows users to create an account and make posts describing leftover food they are willing to give away. Technologies used include HTML, CSS, Javascript, MongoDB, Express, React, and Node.',
            github: 'https://github.com/dalto135/bread-exchange'
        },
        {
            title: 'Global Lost and Found',
            link: 'https://glacial-fortress-45860.herokuapp.com/',
            screenshot: GlobalLostAndFound,
            description: 'A web application that allows users to post and search for items that have been reported missing. Technologies used include Sequelize, Javascript, Handlebars, and MYSQL2.',
            github: 'https://github.com/Youngin9210/Lost-Found',
        },
        {
            title: 'Dine or Dash',
            link: 'https://sarehontaylor.github.io/DineOrDash/',
            screenshot: DineOrDash,
            description: 'A webpage that prompts the user to enter a food dish and location, and displays a list of recipies and local restaurants that match their dish. Technologies used include HTML, CSS, Javascript, and API integration.',
            github: 'https://github.com/SarehonTaylor/DineOrDash'
        },
        {
            title: 'Password Generator',
            link: 'https://dalto135.github.io/password-generator/',
            screenshot: PasswordGenerator,
            description: 'A simple program that generates a random password. The user can specify the length (between 8 and 128 characters), and whether the password includes uppercase and lowercase letters, numbers and special characters. The password will have no more than two of the same character in a row.',
            github: 'https://github.com/dalto135/password-generator'
        },
        {
            title: 'Weather Dashboard',
            link: 'https://dalto135.github.io/weather-dashboard/',
            screenshot: WeatherDashBoard,
            description: 'A webpage that prompts the user to enter a city name, and displays current weather conditions for that city in addition to a 5 day forecast. Technologies used include HTML, CSS, Javascript, and API integration.',
            github: 'https://github.com/dalto135/weather-dashboard'
        },
        {
            title: 'Google Books Search',
            link: 'https://sheltered-ocean-65878.herokuapp.com/',
            screenshot: GoogleBooksSearch,
            description: 'A React webpage that uses the Google Books API to provide a Google Books search engine. Users can make searches to access Google Books and add books to their favorites. Technologies used include HTML, CSS, Javascript, MERN stack and API integration.',
            github: 'https://github.com/dalto135/google-books-search'
        },
        {
            title: 'Tech Blog',
            link: 'https://intense-sea-31464.herokuapp.com/',
            screenshot: TechBlog,
            description: 'A social networking website that allows users to create an account, make blog posts, and leave comments on posts others have made. Technologies used include HTML, CSS, Javascript, MYSQL2, Sequelize, and Handlebars.',
            github: 'https://github.com/dalto135/tech-blog'
        },
        {
            title: 'Coding Quiz Challenge',
            link: 'https://dalto135.github.io/coding-quiz-challenge/',
            screenshot: CodingQuizChallenge,
            description: 'A web application that presents an interactive Javascript quiz. The quiz is timed and time is deducted if a question is answered wrong. The quiz ends when all questions are answered or the timer runs out, and the user can store their score after typing in their initials.',
            github: 'https://github.com/dalto135/coding-quiz-challenge'
        },
        {
            title: 'Employee Tracker',
            link: 'https://drive.google.com/file/d/1PRgjvLbEubjJbmaixVOPNbvKF6S-0zwB/view',
            screenshot: EmployeeTracker,
            description: 'A program that uses Node and Inquirer to manipulate a SQL database of employees, departments and employee roles. Technologies used include Javascript, Node.js, Inquirer, and Dotenv.',
            github: 'https://github.com/dalto135/employee-tracker'
        },
    ];

    return (
        <section className="page" id="projects">
            <div className="pageTitle" id="projectsTitle">
                <h1>Projects</h1>
            </div>
            
            <div className="pageContent" id="projectsContent">

                {/* {projects.map((project, i) => 
                    <div className="projectRow">

                        <Project key={i} title={projects[i].title} link={projects[i].link} screenshot={projects[i].screenshot} description={projects[i].description} github={projects[i].github}/>

                        <Project key={i} title={projects[i + 1].title} link={projects[i + 1].link} screenshot={projects[i + 1].screenshot} description={projects[i + 1].description} github={projects[i + 1].github}/>

                    </div>
                )} */}
                
                {/* Row one projects */}
                <div className="projectRow">

                    <Project title={projects[0].title} link={projects[0].link} screenshot={projects[0].screenshot} description={projects[0].description} github={projects[0].github}/>

                    <Project title={projects[1].title} link={projects[1].link} screenshot={projects[1].screenshot} description={projects[1].description} github={projects[1].github}/>

                </div>
                
                {/* Row two projects */}
                <div className="projectRow">

                    <Project title={projects[2].title} link={projects[2].link} screenshot={projects[2].screenshot} description={projects[2].description} github={projects[2].github}/>

                    <Project title={projects[3].title} link={projects[3].link} screenshot={projects[3].screenshot} description={projects[3].description} github={projects[3].github}/>

                </div>

                {/* Row three projects */}
                <div className="projectRow">

                    <Project title={projects[4].title} link={projects[4].link} screenshot={projects[4].screenshot} description={projects[4].description} github={projects[4].github}/>

                    {/* <Project title={projects[5].title} link={projects[5].link} screenshot={projects[5].screenshot} description={projects[5].description} github={projects[5].github}/> */}

                </div>

                {/* Row four projects */}
                {/* <div className="projectRow">

                    <Project title={projects[6].title} link={projects[6].link} screenshot={projects[6].screenshot} description={projects[6].description} github={projects[6].github}/>

                    <Project title={projects[7].title} link={projects[7].link} screenshot={projects[7].screenshot} description={projects[7].description} github={projects[7].github}/>

                </div> */}

                {/* Row five projects */}
                {/* <div className="projectRow">

                    <Project title={projects[8].title} link={projects[8].link} screenshot={projects[8].screenshot} description={projects[8].description} github={projects[8].github}/>

                </div> */}
                
            </div>
            
        </section>
    );
}

export default Projects;