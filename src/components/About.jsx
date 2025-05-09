import React from "react";

export default function About() {
  return (
    <section className="sec-about" id="about">
      <div className="container">
        <h1>About Me</h1>
        <p>
          I work as a Program Manager at MongoDB, where I enjoy fostering
          relationships with programming communities. Recently I am enjoying
          building dynamic web applications utilizing HTML, CSS, and JavaScript,
          creating responsive and user-friendly interfaces. Currently, playing
          with React to develop more interactive and stateful user experiences,
          as well as Firebase for its powerful backend services, aiming to
          broaden my repertoire in full-stack development.
        </p>
        <div className="about">
          <div>
            <h2>Get to know me!</h2>
            <p>
              I have a Bachelor's degree in Computer Science with experience
              working in development, pre-sales, customer engineering, and
              management. When I am not coding, I enjoy card-making, punch
              needle, cross stitching and playing tennis.
            </p>
          </div>
          <div>
            <h2>Tech Skills</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
