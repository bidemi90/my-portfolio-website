import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "Skills", "Projects", "Education", "Contact"];

const SKILLS = [
  { category: "Languages", items: ["Python", "JavaScript", "HTML/CSS", "SQL"] },
  { category: "Frameworks", items: ["React", "Node.js", "FastAPI", "Tailwind CSS"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "n8n", "Vercel", "Netlify"] },
  { category: "AI / ML", items: ["LLMs", "Ollama", "AI Automation", "Prompt Engineering"] },
];

const PROJECTS = [
  {
    title: "Hostel Management System",
    description: "A full-stack system for managing hostel allocations, payments, and student records with secure authentication.",
    stack: ["React", "Node.js", "PostgreSQL"],
    link: "https://fuoye-room-frontend.vercel.app/",
    status: "Live",
  },
  {
    title: "Attendance Management System",
    description: "A real-time attendance tracking solution with reporting features to reduce errors and improve monitoring.",
    stack: ["React", "Node.js", "MongoDB"],
    link: "https://geo-attend-frontend.vercel.app/",
    status: "Live",
  },
  {
    title: "AI Chatbot Automation",
    description: "An AI-powered chatbot built with n8n and Node.js for automating customer service responses and FAQs.",
    stack: ["Node.js", "n8n", "AI/LLM"],
    link: "#",
    status: "Live",
  },
  {
    title: "EV Demo Website",
    description: "A responsive React and Tailwind demo site showcasing electric vehicle features with modern UI design.",
    stack: ["React", "Tailwind CSS"],
    link: "https://voltistry-solution.netlify.app/",
    status: "Live",
  },
  {
    title: "Loan Application System",
    description: "A React and Node.js application that allows users to apply for loans, track applications, and manage approvals.",
    stack: ["React", "Node.js", "PostgreSQL"],
    link: "https://loan-app-fss-ebon.vercel.app/",
    status: "Live",
  },
  {
    title: "Project Six",
    description: "Describe what this project does, the problem it solves, and the tech you used.",
    stack: ["React", "Node.js"],
    link: "#",
    status: "Live",
  },
  {
    title: "Project Seven",
    description: "Describe what this project does, the problem it solves, and the tech you used.",
    stack: ["Python", "FastAPI"],
    link: "#",
    status: "In Progress",
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

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg: #080b10;
    --card: #0f1620;
    --border: rgba(0,255,170,0.12);
    --border2: rgba(0,255,170,0.25);
    --neon: #00ffaa;
    --neon2: #00cfff;
    --neon-dim: rgba(0,255,170,0.08);
    --text: #e8edf2;
    --muted: #6b7a8d;
    --mono: 'Space Mono', monospace;
    --sans: 'Syne', sans-serif;
  }
  html { scroll-behavior: smooth; }
  body { background: var(--bg); color: var(--text); font-family: var(--sans); line-height: 1.6; overflow-x: hidden; }

  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1rem 2.5rem;
    background: rgba(8,11,16,0.88);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }
  .nav-logo { font-family: var(--mono); color: var(--neon); font-size: 0.95rem; letter-spacing: 0.04em; text-decoration: none; }
  .nav-right { display: flex; align-items: center; gap: 2rem; }
  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-links a { font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.08em; color: var(--muted); text-decoration: none; text-transform: uppercase; transition: color 0.2s; }
  .nav-links a:hover, .nav-links a.active { color: var(--neon); }
  .nav-github {
    display: flex; align-items: center; gap: 0.5rem;
    font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.06em;
    color: var(--text); text-decoration: none;
    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 6px; padding: 0.4rem 0.9rem; transition: all 0.2s;
  }
  .nav-github:hover { border-color: var(--border2); color: var(--neon); background: var(--neon-dim); }
  .gh-icon { width: 15px; height: 15px; fill: currentColor; flex-shrink: 0; }

  section { padding: 6rem 2.5rem; max-width: 1100px; margin: 0 auto; }

  .hero {
    min-height: 100vh; display: flex; flex-direction: column; justify-content: center;
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: ''; position: absolute; top: -200px; right: -200px;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(0,255,170,0.055) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-label { font-family: var(--mono); font-size: 0.75rem; color: var(--neon); letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 1.2rem; }
  .hero-label span { opacity: 0.45; margin-right: 0.5rem; }
  .hero h1 { font-size: clamp(2.6rem, 6.5vw, 5.2rem); font-weight: 800; line-height: 1.05; letter-spacing: -0.02em; margin-bottom: 0.5rem; }
  .name-highlight { background: linear-gradient(130deg, var(--neon), var(--neon2)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .hero-tagline { font-size: clamp(1rem, 2.2vw, 1.3rem); font-weight: 600; color: var(--muted); margin-bottom: 1.5rem; }
  .hero-tagline .accent { color: var(--neon2); }
  .hero-bio { max-width: 530px; font-size: 1rem; color: var(--muted); line-height: 1.75; margin-bottom: 2.5rem; }
  .hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; }

  .btn {
    font-family: var(--mono); font-size: 0.78rem; letter-spacing: 0.06em;
    padding: 0.75rem 1.75rem; border-radius: 5px; cursor: pointer;
    text-decoration: none; transition: all 0.2s; text-transform: uppercase;
    display: inline-flex; align-items: center; gap: 0.5rem;
  }
  .btn-primary { background: var(--neon); color: #080b10; border: none; font-weight: 700; }
  .btn-primary:hover { background: #00e89a; transform: translateY(-1px); }
  .btn-outline { background: transparent; color: var(--neon); border: 1px solid var(--border2); }
  .btn-outline:hover { background: var(--neon-dim); transform: translateY(-1px); }
  .btn-ghost { background: transparent; color: var(--text); border: 1px solid rgba(255,255,255,0.1); }
  .btn-ghost:hover { border-color: rgba(255,255,255,0.25); transform: translateY(-1px); }

  .section-header { margin-bottom: 3rem; }
  .section-label { font-family: var(--mono); font-size: 0.7rem; color: var(--neon); letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 0.5rem; opacity: 0.8; }
  .section-title { font-size: clamp(1.7rem, 4vw, 2.4rem); font-weight: 700; letter-spacing: -0.01em; }

  .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem; }
  .skill-card { background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem; transition: border-color 0.2s, transform 0.2s; }
  .skill-card:hover { border-color: var(--border2); transform: translateY(-3px); }
  .skill-card-title { font-family: var(--mono); font-size: 0.68rem; color: var(--neon); letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 1rem; }
  .skill-items { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .skill-tag { font-family: var(--mono); font-size: 0.7rem; color: var(--text); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 4px; padding: 0.3rem 0.7rem; }

  .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.4rem; }
  .project-card {
    background: var(--card); border: 1px solid var(--border); border-radius: 8px;
    padding: 1.6rem; display: flex; flex-direction: column;
    transition: border-color 0.2s, transform 0.2s; position: relative; overflow: hidden;
  }
  .project-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, var(--neon), var(--neon2)); opacity: 0; transition: opacity 0.2s;
  }
  .project-card:hover { border-color: var(--border2); transform: translateY(-4px); }
  .project-card:hover::before { opacity: 1; }
  .project-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem; gap: 0.5rem; }
  .project-title { font-size: 1.05rem; font-weight: 700; }
  .status-badge { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.08em; padding: 0.22rem 0.6rem; border-radius: 20px; text-transform: uppercase; white-space: nowrap; flex-shrink: 0; }
  .status-live { background: rgba(0,255,170,0.1); color: var(--neon); border: 1px solid rgba(0,255,170,0.25); }
  .status-wip { background: rgba(0,207,255,0.08); color: var(--neon2); border: 1px solid rgba(0,207,255,0.25); }
  .project-desc { font-size: 0.88rem; color: var(--muted); flex: 1; margin-bottom: 1.2rem; line-height: 1.65; }
  .project-stack { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.2rem; }
  .stack-tag { font-family: var(--mono); font-size: 0.65rem; color: var(--neon2); background: rgba(0,207,255,0.07); border: 1px solid rgba(0,207,255,0.18); border-radius: 4px; padding: 0.2rem 0.55rem; }
  .project-link { font-family: var(--mono); font-size: 0.7rem; color: var(--neon); text-decoration: none; letter-spacing: 0.05em; text-transform: uppercase; transition: opacity 0.2s; }
  .project-link:hover { opacity: 0.65; }

  .timeline { position: relative; padding-left: 2rem; }
  .timeline::before { content: ''; position: absolute; left: 0; top: 0.4rem; bottom: 0; width: 1px; background: linear-gradient(to bottom, var(--neon), transparent); }
  .timeline-item { position: relative; padding: 0 0 2.75rem 2rem; }
  .timeline-item:last-child { padding-bottom: 0; }
  .timeline-item::before { content: ''; position: absolute; left: -0.3rem; top: 0.45rem; width: 8px; height: 8px; background: var(--neon); border-radius: 50%; box-shadow: 0 0 10px rgba(0,255,170,0.5); }
  .timeline-year { font-family: var(--mono); font-size: 0.68rem; color: var(--neon); letter-spacing: 0.1em; margin-bottom: 0.35rem; opacity: 0.8; }
  .timeline-degree { font-size: 1.08rem; font-weight: 700; margin-bottom: 0.2rem; }
  .timeline-school { font-size: 0.9rem; color: var(--text); margin-bottom: 0.25rem; }
  .timeline-field { display: inline-block; font-family: var(--mono); font-size: 0.65rem; color: var(--neon2); background: rgba(0,207,255,0.07); border: 1px solid rgba(0,207,255,0.18); border-radius: 4px; padding: 0.2rem 0.6rem; margin-top: 0.35rem; letter-spacing: 0.05em; }

  .cv-section {
    background: var(--card); border: 1px solid var(--border); border-radius: 10px;
    padding: 2rem 2.5rem; display: flex; align-items: center; justify-content: space-between;
    gap: 2rem; flex-wrap: wrap; margin-top: 3rem;
  }
  .cv-section h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem; }
  .cv-section p { color: var(--muted); font-size: 0.88rem; }

  .contact-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
  .contact-info h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 0.7rem; }
  .contact-info p { color: var(--muted); font-size: 0.92rem; line-height: 1.75; margin-bottom: 1.5rem; }
  .contact-link { display: flex; align-items: center; gap: 0.75rem; font-family: var(--mono); font-size: 0.75rem; color: var(--text); text-decoration: none; margin-bottom: 0.8rem; transition: color 0.2s; }
  .contact-link:hover { color: var(--neon); }
  .contact-link-icon { width: 32px; height: 32px; border: 1px solid var(--border); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 13px; background: rgba(255,255,255,0.03); flex-shrink: 0; }
  .contact-form { display: flex; flex-direction: column; gap: 1rem; }
  .form-group { display: flex; flex-direction: column; gap: 0.4rem; }
  .form-label { font-family: var(--mono); font-size: 0.68rem; color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase; }
  .form-input, .form-textarea { background: var(--card); border: 1px solid var(--border); border-radius: 6px; color: var(--text); font-family: var(--sans); font-size: 0.9rem; padding: 0.75rem 1rem; transition: border-color 0.2s; outline: none; resize: none; }
  .form-input:focus, .form-textarea:focus { border-color: var(--border2); }
  .form-textarea { min-height: 115px; }

  .footer { text-align: center; padding: 2rem; border-top: 1px solid var(--border); font-family: var(--mono); font-size: 0.7rem; color: var(--muted); }
  .footer span { color: var(--neon); }

  @media (max-width: 700px) {
    .nav-links { display: none; }
    .nav-github span { display: none; }
    section { padding: 4rem 1.25rem; }
    .contact-wrapper { grid-template-columns: 1fr; }
    .hero h1 { font-size: 2.4rem; }
    .cv-section { flex-direction: column; }
  }
`;

const GithubIcon = () => (
  <svg className="gh-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("Home");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.dataset.section); }); },
      { threshold: 0.35 }
    );
    Object.values(sectionRefs.current).forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  const setRef = (name) => (el) => { sectionRefs.current[name] = el; };

  return (
    <>
      <style>{css}</style>

      {/* NAV */}
      <nav className="nav">
        <a href="#home" className="nav-logo">{"<SodiqDev />"}</a>
        <div className="nav-right">
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className={activeSection === link ? "active" : ""}>{link}</a>
              </li>
            ))}
          </ul>
          <a href="https://github.com/bidemi90" target="_blank" rel="noreferrer" className="nav-github">
            <GithubIcon /><span>GitHub</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero" ref={setRef("Home")} data-section="Home"
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>
        <p className="hero-label"><span>{">"}</span> Hello, World</p>
        <h1>I'm <span className="name-highlight">Sodiq<br />Abdullahi</span></h1>
        <p className="hero-tagline">
          Web Developer &amp; CS Student, <span className="accent">FUOYE</span>
        </p>
        <p className="hero-bio">
          I build intelligent, scalable web systems — from full-stack platforms to AI-powered automation tools.
          Currently studying Computer Science at Federal University Oye-Ekiti and turning real-world problems into working software.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
          <a href="https://github.com/bidemi90" target="_blank" rel="noreferrer" className="btn btn-ghost">
            <GithubIcon />GitHub
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
                {group.items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}
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
                <span className={`status-badge ${p.status === "Live" ? "status-live" : "status-wip"}`}>{p.status}</span>
              </div>
              <p className="project-desc">{p.description}</p>
              <div className="project-stack">
                {p.stack.map((t) => <span className="stack-tag" key={t}>{t}</span>)}
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" ref={setRef("Education")} data-section="Education">
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
            <p>Get a full overview of my skills, education, and project experience.</p>
          </div>
          <a href="/Sodiq_Abdullahi_CV.pdf" download className="btn btn-primary">
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
              I'm available for freelance projects, collaborations, and internships.
              Whether it's a web app, an AI tool, or a full product — let's build something great.
            </p>
            <a href="mailto:sodiqabdullahi431@gmail.com" className="contact-link">
              <span className="contact-link-icon">✉</span>
              sodiqabdullahi431@gmail.com
            </a>
            <a href="https://wa.me/2348083135400" target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-icon">WA</span>
              +234 808 313 5400
            </a>
            <a href="https://github.com/bidemi90" target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-icon" style={{ padding: "0 6px" }}><GithubIcon /></span>
              github.com/bidemi90
            </a>
          </div>

          <div>
            {submitted ? (
              <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "8px", background: "var(--card)", textAlign: "center" }}>
                <p style={{ color: "var(--neon)", fontFamily: "var(--mono)", fontSize: "0.82rem", marginBottom: "0.5rem" }}>// Message sent ✓</p>
                <p style={{ color: "var(--muted)", fontSize: "0.88rem" }}>Thanks for reaching out! I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input className="form-input" type="text" placeholder="Your name"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" placeholder="your@email.com"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" placeholder="Tell me about your project..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                </div>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>Designed &amp; Built by <span>Sodiq Abdullahi</span> · {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
