import React from "react";
import aboutMe from "../assets/aboutMe.jpeg";

export default function Home() {
  return (
    <section className="home-hero" id="home">
      <div className="home-hero-content">
        <div>
          <h1 className="hero-heading">
            Hey, Welcome to my <span>Creative</span> Nook!
          </h1>
          <p className="hero-text">
            I am a passionate technical <span>community builder,</span>{" "}
            educator, writer,
            <span> speaker, developer</span> and a continuous learner based in
            Dublin, Ireland. I am a seasoned professional learning front-end
            development skills, <span>React JS</span> , HTML, CSS, and{" "}
            <span> Firebase.</span>
          </p>
          <a href="./#projects" className="projects-btn">
            See my projects
          </a>
        </div>
        <img src={aboutMe} alt="henna standing at podium talking" />
      </div>
    </section>
  );
}
