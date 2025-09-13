import React from "react";
import LinkPreview from "./LinkPreview";

const projects = [
  {
    title: "Project Title 1",
    description: "Brief description of the project goes here.",
    url: "http://localhost:5174/",
  },
  {
    title: "Project Title 2",
    description: "Brief description of the project goes here.",
    url: "http://localhost:5173/",
  },
  {
    title: "Project Title 3",
    description: "Brief description of the project goes here.",
    url: "https://edu.sqi.ng/our-story/",
  },
  {
    title: "Project Title 3",
    description: "Brief description of the project goes here.",
    url: "https://edu.sqi.ng/our-story/",
  },
  {
    title: "Project Title 3",
    description: "Brief description of the project goes here.",
    url: "https://edu.sqi.ng/our-story/",
  },
  {
    title: "Project Title 3",
    description: "Brief description of the project goes here.",
    url: "https://edu.sqi.ng/our-story/",
  },
];

const Project = () => {
  return (
    <>
      <section id="projects" className="py-20 bg-white-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center project-header">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="  each-project-holder rounded-lg shadow-md overflow-hidden "
              >
                <LinkPreview url={project.url} />
                <div className="p-6 text-in-one-project-card">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-400 mb-4">{project.description}</p>
                  
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      
                    }}
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
