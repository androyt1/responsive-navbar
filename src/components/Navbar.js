import React from 'react'
import './Navbar.css'

const Navbar = ({show,click}) => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
            <i class="fa-solid fa-house"></i>
                <span>Androy World</span>
            </div>
            <ul className="navbar__links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>                
            </ul>
            <div className="navbar__icon" onClick={click}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar
