import React from 'react';
import logo from '../logo.svg';
function Navbar() {
    return (
        <div className='navbar'>
            <div className='rightSide'>
                <img src={logo} alt="Logo" />
                <h3>ReactFacts</h3>
            </div>
            <h4>React Course - Project1</h4>
        </div>
    )
}

export default Navbar ;