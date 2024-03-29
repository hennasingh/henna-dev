import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiMediumFill } from "react-icons/ri";
import { FaHashnode } from "react-icons/fa6";

export default function Footer() {

    return (
        <footer>
            <div className='container'>
                <div>
                    <p>@2024 Henna Singh. All rights reserved</p>
                </div>
                <div className="socials">
                    <a href="https://github.com/hennasingh" target='_blank'>
                        <FaGithub className='icon' size={24}/>
                    </a>
                    <a href="https://linkedin.com/in/hennasingh" target='_blank'>
                        <FaLinkedin className='icon' size={24} />
                    </a>
                    <a href="https://twitter.com/henna_dev" target='_blank'>
                        <FaXTwitter className='icon' size={24} />
                    </a>
                    <a href="https://hennasingh.medium.com/" target='_blank'>
                        <RiMediumFill className='icon' size={24} />
                    </a>
                    <a href="https://codelady.hashnode.dev/" target='_blank'>
                        <FaHashnode className='icon' size={24}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}