import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function navBar() {
    return (
        <div id = "background-panel">
            <div>
                <Link to = '/'>
                    Home
                </Link>
            </div>
            <div>
                <Link to = '/profile'>
                    About
                </Link>
            </div>
            <div>
                Shows
            </div>
            <div>
                Suggestions
            </div>
        </div>
    )
}

export default navBar
