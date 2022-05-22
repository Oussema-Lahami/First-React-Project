import React from 'react';
import '../App.css'
import logo from '../logo.svg';

function MainBody() {
    return (
        <div className='main'>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>is maintained by Facebook</li>
                <li>Powers thousands of entreprise apps, including mobile apps</li>
            </ul>
            <img src={logo} alt="Logo" />
        </div>
    )
}

export default MainBody ;