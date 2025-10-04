import React from "react";
import LinkPreview from "./LinkPreview";

const projects = [
 {
  title: "Hostel Management System",
  description: "A full-stack system for managing hostel allocations, payments, and student records with secure authentication.",
  url: "https://fuoye-room-frontend.vercel.app/",
},
{
  title: "Attendance Management System",
  description: "A real-time attendance tracking solution with reporting features to reduce errors and improve monitoring.",
  url: "https://geo-attend-frontend.vercel.app/",
},
{
  title: "AI Chatbot Automation",
  description: "An AI-powered chatbot built with n8n and Node.js for automating customer service responses and FAQs.",
  url: "",
},
{
  title: "EV Demo Website",
  description: "A responsive React and Tailwind demo site showcasing electric vehicle features.",
  url: "https://voltistry-solution.netlify.app/",
},
{
  title: "Loan Application System",
  description: "A React and Node.js application that allows users to apply for loans, track applications, and manage approvals.",
  url: "https://loan-app-fss-ebon.vercel.app/",
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
