import React from 'react'
import logo from '../assets/thumbnail.jpeg'
import { CgMenuRight, CgClose } from "react-icons/cg";

export default function Header() {

    const [showMenu, setShowMenu] = React.useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const Menu = () => (
        <nav>
            <ul className={showMenu ? 'ul-item': ''}>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )

    return (
        <header>
            <div className='header-container'>
                <div>
                    <img className="header-logo"src={logo} alt="thumbnail of henna singh" />
                    <p>Henna Singh</p>
                </div>
                <div className='menu'>
                    {
                        showMenu ? (
                            <CgClose size={36} color='#EA035E' onClick={toggleMenu} className='close-menu'/>
                        ) 
                        : (
                            <CgMenuRight size={36} color='#EA035E'onClick={toggleMenu} className='menu'/>
                        )

                    }
                    {showMenu && <Menu />}
                </div>
            </div>
        </header>
    )
}