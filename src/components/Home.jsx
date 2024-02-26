import React from 'react'

export default function Home() {

    return (
        <section className='home-hero'>
            <div className='home-hero-content'>
                <h1 className='hero-heading'>Hey, Welcome to my Creative Nook!</h1>
                <div className='hero-body'>
                    <p className='hero-text'>
                        I am a passionate technical <span>community builder,</span>  educator, writer, 
                      <span> speaker, developer</span> and a continuous learner based in Dublin, Ireland.
                        Currently, leveling up my knowledge in <span>React JS</span> and <span>Tailwind CSS</span> 
                        to transition to a front-end developer role.
                    </p>
                </div>
                <a href='./#projects' className='projects-btn'>See my projects</a>
            </div>           
        </section>
    )
}