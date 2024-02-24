import React from 'react'
import logo from '../assets/thumbnail.jpeg'

export default function Header() {

    return (
        <header>
            <img className="header-logo"src={logo} alt="thumbnail of henna singh" />
            <p>Henna Singh</p>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}