import React from "react";
import { Meteors } from "./ui/shadcn-io/meteors";
import myimg from "../assets/download (2).png";
const Hero = () => {
  return (
    <>
      <div className="hero-section h-screen w-full bg-white overflow-hidden  ">
        <Meteors number={20} className="" />
        <div className="hero-text-container">
          <div className="hero-text-container-inner">
            <h1
              className="text-in-hero sm:text-battleGray sm:text-[90px] 
               text-eerieBlack text-[50px] 
               font-extrabold uppercase"
            >
              Hi, I'm <br /> Abdullahi
            </h1>
            <p className="text-p-in-hero font-medium lg:text-[20px] sm:text-[16px] xs:text-[10px] text-[16px] lg:leading-[40px] mt-2">
              A passionate Web Developer & Computer Science student. <br />I
              love building clean, interactive, and scalable web apps.
            </p>
          </div>
        </div>
        <div className="image-blackbackground-holder">
          <img src={myimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
