import React from 'react';
import './Navbar.css';

function Navbar({ isLoggedIn, onSignIn, onSignOut }) {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src="./logo.png" alt="Logo" />
            </div>
            <ul className="navbar__list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="navbar__buttons">
                {isLoggedIn ? (
                    <button onClick={onSignOut}>Sign Out</button>
                ) : (
                    <button onClick={onSignIn}>Sign In</button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;