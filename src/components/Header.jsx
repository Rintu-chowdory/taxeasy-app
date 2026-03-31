import React from 'react';
import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <h1>Welcome to My Portfolio</h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;