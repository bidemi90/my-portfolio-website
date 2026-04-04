import { useState, useEffect, useRef } from "react";
import "./index.css";
const NAV_LINKS = ["Home", "Skills", "Projects", "Education", "Contact"];

const SKILLS = [
  { category: "Languages", items: ["Python", "JavaScript", "HTML/CSS", "SQL"] },
  {
    category: "Frameworks",
    items: ["React", "Node.js", "FastAPI", "Tailwind CSS"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "n8n", "Vercel", "Netlify"],
  },
  {
    category: "AI / ML",
    items: ["LLMs", "Ollama", "AI Automation", "Prompt Engineering"],
  },
];

const PROJECTS = [
  {
    title: "Intelligent Level Adviser",
    description:
      "A pedagogical chatbot engineered to provide zero-hallucination academic guidance through a Retrieval-Augmented Generation (RAG) architecture that strictly grounds responses in localized institutional handbooks.",
    stack: ["Python", "LangChain", "MongoDB Atlas", "Cohere", "Streamlit"],
    link: "https://intelligent-level-adviser.streamlit.app/",
    status: "Live",
  },
  {
    title: "Student Performance Prediction System",
    description:
      "A machine learning-based early warning application utilizing a 3-Pillar Modular Ensemble (Behavioral, Psychological, and Academic) to classify student risk levels with an 88.50% accuracy rate and provide Explainable AI (XAI) insights.",
    stack: ["Python", "Streamlit", "MongoDB", "Scikit-learn", "Pandas"],
    link: "https://student-performance-prediction--system.streamlit.app/",
    status: "Live",
  },
  {
    title: "Hostel Management System",
    description:
      "A full-stack system for managing hostel allocations, payments, and student records with secure authentication.",
    stack: ["React", "Node.js", "PostgreSQL"],
    link: "https://fuoye-room-frontend.sodiqabdullahibidemi.com/",
    status: "Live",
  },
  {
    title: "Attendance Management System",
    description:
      "A real-time attendance tracking solution with reporting features to reduce errors and improve monitoring.",
    stack: ["React", "Node.js", "MongoDB"],
    link: "https://geo-attend.sodiqabdullahibidemi.com/",
    status: "Live",
  },
  {
    title: "AI Chatbot Automation",
    description:
      "An AI-powered chatbot built with n8n and Node.js for automating customer service responses and FAQs.",
    stack: ["Node.js", "n8n", "AI/LLM"],
    link: "#",
    status: "Live",
  },
  {
    title: "EV Demo Website",
    description:
      "A responsive React and Tailwind demo site showcasing electric vehicle features with modern UI design.",
    stack: ["React", "Tailwind CSS"],
    link: "https://voltistry-solution.sodiqabdullahibidemi.com",
    status: "Live",
  },
  {
    title: "Loan Application System",
    description:
      "A React and Node.js application that allows users to apply for loans, track applications, and manage approvals.",
    stack: ["React", "Node.js", "PostgreSQL"],
    link: "https://loan-app.sodiqabdullahibidemi.com/",
    status: "Live",
  },
];

const EDUCATION = [
  {
    year: "2023 – Present (Expected 2026)",
    degree: "B.Sc. Computer Science",
    school: "Federal University Oye-Ekiti, Ekiti State",
    field: "Computer Science",
  },
  {
    year: "2022 – 2023",
    degree: "Diploma in Software Engineering",
    school: "SQI College of ICT, Ibadan (Dugbe Campus)",
    field: "Web Development",
  },
  {
    year: "2020 – 2022",
    degree: "National Diploma in Computer Science",
    school: "Federal School of Statistics, Ibadan",
    field: "Computer Science",
  },
];

const GithubIcon = () => (
  <svg
    className="gh-icon"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("Home");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.dataset.section);
        });
      },
      { threshold: 0.35 },
    );
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  const setRef = (name) => (el) => {
    sectionRefs.current[name] = el;
  };

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <a href="#home" className="nav-logo">
          {"<SodiqDev />"}
        </a>
        <div className="nav-right">
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={activeSection === link ? "active" : ""}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/bidemi90"
            target="_blank"
            rel="noreferrer"
            className="nav-github"
          >
            <GithubIcon />
            <span>GitHub</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="hero"
        ref={setRef("Home")}
        data-section="Home"
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}
      >
        <p className="hero-label">
          <span>{">"}</span> Hello, World
        </p>
        <h1>
          I'm{" "}
          <span className="name-highlight">
            Sodiq
            <br />
            Abdullahi
          </span>
        </h1>
        <p className="hero-tagline">
          Web Developer &amp; CS Student, <span className="accent">FUOYE</span>
        </p>
        <p className="hero-bio">
          I build intelligent, scalable web systems — from full-stack platforms
          to AI-powered automation tools. Currently studying Computer Science at
          Federal University Oye-Ekiti and turning real-world problems into
          working software.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
          <a
            href="https://github.com/bidemi90"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            <GithubIcon />
            GitHub
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" ref={setRef("Skills")} data-section="Skills">
        <div className="section-header">
          <p className="section-label">// 01 — Skills</p>
          <h2 className="section-title">What I Work With</h2>
        </div>
        <div className="skills-grid">
          {SKILLS.map((group) => (
            <div className="skill-card" key={group.category}>
              <p className="skill-card-title">{group.category}</p>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" ref={setRef("Projects")} data-section="Projects">
        <div className="section-header">
          <p className="section-label">// 02 — Projects</p>
          <h2 className="section-title">Things I've Built</h2>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-top">
                <h3 className="project-title">{p.title}</h3>
                <span
                  className={`status-badge ${p.status === "Live" ? "status-live" : "status-wip"}`}
                >
                  {p.status}
                </span>
              </div>
              <p className="project-desc">{p.description}</p>
              <div className="project-stack">
                {p.stack.map((t) => (
                  <span className="stack-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        ref={setRef("Education")}
        data-section="Education"
      >
        <div className="section-header">
          <p className="section-label">// 03 — Education</p>
          <h2 className="section-title">My Journey</h2>
        </div>
        <div className="timeline">
          {EDUCATION.map((item) => (
            <div className="timeline-item" key={item.year}>
              <p className="timeline-year">{item.year}</p>
              <p className="timeline-degree">{item.degree}</p>
              <p className="timeline-school">{item.school}</p>
              <span className="timeline-field">{item.field}</span>
            </div>
          ))}
        </div>

        {/* CV SECTION */}
        <div className="cv-section">
          <div>
            <h3>Download My CV</h3>
            <p>
              Get a full overview of my skills, education, and project
              experience.
            </p>
          </div>
          <a
            href="/Sodiq_Abdullahi_CV.pdf"
            download
            className="btn btn-primary"
          >
            ↓ Download CV
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" ref={setRef("Contact")} data-section="Contact">
        <div className="section-header">
          <p className="section-label">// 04 — Contact</p>
          <h2 className="section-title">Let's Work Together</h2>
        </div>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Open to opportunities</h3>
            <p>
              I'm available for freelance projects, collaborations, and
              internships. Whether it's a web app, an AI tool, or a full product
              — let's build something great.
            </p>
            <a
              href="mailto:sodiqabdullahi431@gmail.com"
              className="contact-link"
            >
              <span className="contact-link-icon">✉</span>
              sodiqabdullahi431@gmail.com
            </a>
            <a
              href="https://wa.me/2348083135400"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">WA</span>
              +234 808 313 5400
            </a>
            <a
              href="https://github.com/bidemi90"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon" style={{ padding: "0 6px" }}>
                <GithubIcon />
              </span>
              github.com/bidemi90
            </a>
          </div>

          <div>
            {submitted ? (
              <div
                style={{
                  padding: "2rem",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  background: "var(--card)",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    color: "var(--neon)",
                    fontFamily: "var(--mono)",
                    fontSize: "0.82rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  // Message sent ✓
                </p>
                <p style={{ color: "var(--muted)", fontSize: "0.88rem" }}>
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ alignSelf: "flex-start" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          Designed &amp; Built by <span>Sodiq Abdullahi</span> ·{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
