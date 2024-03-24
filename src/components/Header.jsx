import React from 'react'
import logo from '../assets/thumbnail.jpeg'
import {RiCloseLine, RiMenu3Line} from 'react-icons/ri'

export default function Header() {

    const Menu = () => (
        <nav>
            <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )

    return (
        <header>
            <img className="header-logo"src={logo} alt="thumbnail of henna singh" />
            <p>Henna Singh</p>   
            <Menu /> 
        </header>
    )
}