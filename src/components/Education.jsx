import React from "react";

// Example education data
const educationData = [
  {
    school: "Federal University Oye-Ekiti, Ekiti State",
    startYear: 2023,
    endYear: "In Progress (Expected 2026)",
    degree: "B.Sc. Computer Science",
    course: "Computer Science",
  },
  {
    school: "SQI College of ICT, Ibadan (Dugbe Campus)",
    startYear: 2022,
    endYear: 2023,
    degree: "Diploma in Software Engineering",
    course: "Web Development",
  },
  {
    school: "Federal School of Statistics, Ibadan",
    startYear: 2020,
    endYear: 2022,
    degree: "National Diploma in Computer Science",
    course: "Computer Science",
  },
];

const Education = () => {
  return (
    <section className="education-timeline">
      <h2 className="education-title">Education</h2>
      <div className="timeline-container">
        {educationData.map((edu, idx) => (
          <div
            className={`timeline-item ${idx % 2 === 0 ? "right" : "left"}`}
            key={idx}
          >
            <div className="timeline-line" />
            <div className="education-card">
              <div className="card-content">
                <h3 className="school-name">{edu.school}</h3>
                <p className="years">
                  {edu.startYear} - {edu.endYear}
                </p>
                <p className="degree">{edu.degree}</p>
                <p className="course">{edu.course}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Last shape: Download CV */}
        <div
          className={`timeline-item ${
            educationData.length % 2 === 0 ? "right" : "left"
          }`}
        >
          <div className="timeline-line" />
          <div className="education-card">
            <div className="card-content" style={{ textAlign: "center" }}>
              <h3 className="school-name">Want to know more?</h3>
              <p className="degree">Download my CV for full details!</p>
              <button
                className="download-cv-btn"
                style={{
                  marginTop: "12px",
                  padding: "8px 20px",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  background: "rgb(38, 42, 16)",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => window.open("/CV Curriculum Vitae SODIQ ABDULLAHI BIDEM1.pdf", "_blank")}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
