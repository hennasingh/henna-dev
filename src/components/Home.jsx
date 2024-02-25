import React from 'react'

export default function Home() {

    return (
        <section className='home-hero'>
            <div className='home-hero-content'>
                <h1 className='hero-heading'>Hey, Welcome to my creative page</h1>
                <div className='hero-body'>
                    <p className='hero-text'>
                        I am a passionate technical community builder, educator, writer,
                        speaker, developer and a continuous learner based in Dublin, Ireland.
                        Currently, leveling up my knowledge in React JS and Tailwind CSS to transition to a front-end developer role.
                    </p>
                </div>
                <a href='./#projects' className='projects-btn'>See my projects</a>
            </div>           
        </section>
    )
}