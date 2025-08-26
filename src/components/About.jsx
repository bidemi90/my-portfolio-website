import React from "react";

const About = () => {
  return (
    <>
      <section className="about-container ">
        <div className="about-inner-container">
          <p className="about-p Mova">Introduction</p>
          <h2 className="about-h2 poppins-bold">Overview</h2>
          <p className="about-description poppins-regular">
            I’m Abdullahi, a passionate Computer Science student and web
            developer. I love building interactive web apps, exploring
            automation, and solving real-world problems with code. My goal is to
            create solutions that are both functional and visually engaging.
          </p>
        </div>
           <div className="about-skills-container">
            <div className="box-1">Frontend Developer</div>
            <div className="box-1">Backend Developer</div>
            <div className="box-1">AI Agent Developer</div>
            <div className="box-1">Automation Specialist</div>
          </div>
      </section>
    </>
  );
};

export default About;
