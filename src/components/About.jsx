import React from "react";
import backend from "../assets/icons/backend.png";
import ai_agent from "../assets/icons/ai-agent1.png";
import automation from "../assets/icons/automation1.png";
import frontend from "../assets/icons/frontend.png";
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
          <div className="box-1">
            <img src={frontend} alt="" />
            <p>Frontend <br /> Developer</p>
          </div>
          <div className="box-1">
            <img src={backend} alt="" />
            <p>Backend <br /> Developer</p>
          </div>
          <div className="box-1">
            <img src={ai_agent} alt="" />
            <p>AI Agent <br /> Developer</p>
          </div>
          <div className="box-1">
            <img src={automation} alt="" />
            <p>Automation <br /> Specialist</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
