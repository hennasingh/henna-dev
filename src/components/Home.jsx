import React from 'react'
import aboutMe from '../assets/aboutMe.jpeg'

export default function Home() {

    return (
        <section className='home-hero'>
            <div className='home-hero-content'>
                <div>
                    <h1 className='hero-heading'>Hey, Welcome to my Creative Nook!</h1>
                    <p className='hero-text'>
                        I am a passionate technical <span>community builder,</span>  educator, writer, 
                        <span> speaker, developer</span> and a continuous learner based in Dublin, Ireland.
                        Currently, building web solutions in <span>React JS</span> , HTML, CSS, and <span> Firebase </span> 
                        to transition to a front-end developer role.
                    </p>
                    <a href='./#projects' className='projects-btn'>See my projects</a>  
                </div>
                <img src= {aboutMe} alt="henna standing at podium talking"/>
            </div>   
      
        </section>
    )
}