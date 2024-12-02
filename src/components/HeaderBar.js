import React from 'react';
import "./styles/HeaderBar.css"
import { NavLink } from 'react-router-dom';

const HeaderBar = () => {

    return (
        <header className='App-header'>
            <h1>FE Engage Growths Calculator</h1>
            <nav>
                <p><NavLink to='/characters' className={ ({ isActive }) => `${isActive? 'active': ''}`}>Characters</NavLink></p>
                <p className='middle'><NavLink to='/calculator'>Calculator</NavLink></p>
                <p><NavLink to='/classes'>Classes</NavLink></p>
            </nav>
        </header>
    )
}

export default HeaderBar;