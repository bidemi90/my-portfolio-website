import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { RiBootstrapFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { SiN8N } from "react-icons/si";

const Skill = () => {
  return (
    <>
      <section className="skill-container">
        <p className="skill-p ">My Skills</p>
        <h1 className="skill-h1">tecnologies.</h1>
        <div className="skill-shapes-container">
          <div className="skill-shape aspect-square">
            <FaHtml5 />
            {/* <h2>HTML</h2> */}
          </div>
          <div className="skill-shape aspect-square">
            <IoLogoCss3 />
            {/* <h2>css</h2> */}
          </div>
          <div className="skill-shape aspect-square">
            <IoLogoJavascript />
            {/* <h2>JavaScript</h2> */}
          </div>
          <div className="skill-shape aspect-square">
            <RiBootstrapFill />
            {/* <h2>bootstrap</h2> */}
          </div>
          <div className="skill-shape aspect-square">
            <FaReact />
            {/* <h2>React.js</h2> */}
          </div>
          <div className="skill-shape aspect-square">
            <FaNode />
            {/* <h2>Node.js</h2> */}
          </div>
          <div className="skill-shape aspect-square">
            <FaGitAlt />
            {/* <h2>Git</h2> */}
          </div>
          <div className="skill-shape aspect-square">
            <SiGithub />
            {/* <h2>GitHub</h2> */}
          </div>
          <div className="skill-shape aspect-square">
            <SiN8N />
            {/* <h2>n8n</h2> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
