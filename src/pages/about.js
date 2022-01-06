import React from 'react';
import './about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'

function About() {
    return (
        <main className="about-main d-flex flex-column justify-content-center">
            <div className="container d-flex flex-column justify-content-evenly">
            <h1 className="text-center"><FontAwesomeIcon className="icon" icon={faChartBar} /> About this application <FontAwesomeIcon className="icon" icon={faChartBar} /></h1> 
            <p>Application tries to compare 3 diffrent frontend frameworks performance. Frameworks used in this application: <span className="angular">Angular</span>, <span className="vuejs">Vuejs</span>, <span className="react">React</span>.</p>
            <p>The test is about performing tasks such as: data loading speed, CRUD operations,
            animations, asynchronus operations, forms rendering and validation, http requests and rendering
            data after changes.</p>
            <p>Application is connected with backend application written in Java and Spring stack.
            This module of app is written in React.js. </p>
            </div>
        </main>
    )
}

export default About;