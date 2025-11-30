import React from "react";
import { useState } from "react";
import "./index.css";

type SkillGroups = Record<string, string[]>;

const skills: SkillGroups = {
  "AI / ML": [
    "PyTorch",
    "TensorFlow",
    "Deep Learning",
    "Computer Vision",
    "Data Science",
    "ML Pipelines",
  ],
  Languages: ["Python", "Java", "JavaScript", "SQL"],
  "Web & Mobile": ["React", "React Native", "Django", "PostgreSQL", "Supabase"],
  "Tools & Platforms": ["Git", "Linux"],
};

interface Project {
  title: string;
  role: string;
  period: string;
  highlight: string;
  bullets: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Markerless Pose Estimation for Pig Locomotion",
    role: "Computer Vision & Deep Learning",
    period: "2025 · MSc Dissertation",
    highlight:
      "Built a markerless computer vision pipeline to analyse pig gait for early lameness detection.",
    bullets: [
      "Curated and annotated a novel pig locomotion dataset under farm-like conditions.",
      "Trained and evaluated deep learning pose-estimation models for gait analysis.",
      "Aimed at objective, automated welfare monitoring in Precision Livestock Farming.",
    ],
    tags: ["Computer Vision", "Pose Estimation", "Deep Learning", "Animal Welfare"],
  },
  {
    title: "InventoryXpert – Inventory & POS System",
    role: "Full-Stack Developer",
    period: "2024",
    highlight:
      "Cross-platform inventory and POS system for small and medium businesses.",
    bullets: [
      "Designed for constrained-resource businesses with both web and mobile access.",
      "Focused on fast stock lookups, sales flows, and intuitive UI.",
      "Optimised data access patterns to keep responses snappy.",
    ],
    tags: ["React", "React Native", "POS", "Inventory"],
  },
  {
    title: "E-Vehicle Sharing Platform",
    role: "Full-Stack Developer",
    period: "2024 · Group Project",
    highlight:
      "Location-aware vehicle-sharing platform using geospatial coordinates.",
    bullets: [
      "Set up the full stack with Django, React, PostgreSQL, and Supabase.",
      "Owned database design and backend–frontend integration.",
      "Implemented vehicle tracking, rental status, and user flows end-to-end.",
    ],
    tags: ["Django", "React", "PostgreSQL", "Supabase", "Geospatial"],
  },
];

interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

const experienceTech: Experience[] = [
  {
    company: "Squer Products, Thane",
    role: "Web Development Intern",
    period: "Jan 2023 – Jul 2023",
    bullets: [
      "Built responsive, user-centric web pages from client requirements.",
      "Designed interactive dashboards and integrated efficient API calls.",
      "Improved data visualisation and access across client platforms.",
      "Debugged and resolved complex issues to enhance performance.",
    ],
  },
  {
    company: "Squer Products, Thane",
    role: "Mobile Development Intern",
    period: "Jun 2024 – Aug 2024",
    bullets: [
      "Developed user-friendly mobile screens and flows for client apps.",
      "Delivered robust, tested features aligned with client needs.",
      "Streamlined screen creation and testing to speed up releases.",
    ],
  },
];

const experienceOther: Experience[] = [
  {
    company: "Post Office Ltd, Cowdenbeath",
    role: "Customer Advisor",
    period: "Sep 2025 – Present",
    bullets: [
      "Support customers with banking, postal, and financial services.",
      "Handle cash, deposits, withdrawals, and transfers accurately.",
      "Explain savings, insurance, and parcel options in simple terms.",
    ],
  },
  {
    company: "Murphy’s Pakora Bar, Glasgow",
    role: "Front of House",
    period: "May 2025 – Sep 2025",
    bullets: [
      "Delivered friendly, efficient service in a fast-paced environment.",
      "Coordinated with kitchen and bar teams for smooth operations.",
      "Ensured guests had a positive, memorable dining experience.",
    ],
  },
];

interface ResearchItem {
  title: string;
  status: string;
  description: string;
}

const research: ResearchItem[] = [
  {
    title:
      "Markerless Pose Estimation for Enhanced Pig Locomotion Analysis: A Benchmark Dataset and Deep Learning Model",
    status: "In progress · Expected submission Dec 2025",
    description:
      "Manuscript focused on deep learning and computer vision methods for animal pose estimation and welfare monitoring.",
  },
];

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  details: string;
}

const education: EducationItem[] = [
  {
    degree: "MSc Computing Science",
    school: "University of Glasgow · Glasgow, UK",
    period: "Sept 2024 – Sept 2025",
    details:
      "2:1 | Modules: Data Science, Deep Learning, Text as Data, ML, Information Visualisation, Big Data.",
  },
  {
    degree: "BSc Computer Science",
    school: "Ramnarain Ruia Autonomous College · Mumbai, India",
    period: "Sept 2021 – Apr 2024",
    details: "2:1 | 8.75 / 10",
  },
];

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <section id={id} className="section">
    <div className="section-header">
      <h2>{title}</h2>
      <span className="section-accent" />
    </div>
    {children}
  </section>
);

interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => (
  <span className="tag">{children}</span>
);

const App: React.FC = () => {

  const [showCopied, setShowCopied] = useState(false);
  const EMAIL = "aryaanvedak@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000); // hide after 2s
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-left">
          <span className="logo">AV</span>
          <span className="nav-name">Aryaan Vedak</span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#ai">AI / ML</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="content">
        {/* HERO */}
        <section className="hero">
          <div className="hero-main">
            <p className="hero-kicker">AI / ML · Computer Vision · Full-Stack</p>
            <h1>
              Hi, I’m <span className="highlight">Aryaan</span>.
            </h1>
            <p className="hero-subtitle">
              I’m a software developer and MSc Computing Science graduate,
              specialising in AI/ML and computer vision. I enjoy turning real-world
              problems into production-ready models and intuitive applications.
            </p>
            <div className="hero-actions">
              {/* Update href to your actual CV URL in public/ */}
              <a href="https://drive.google.com/file/d/1M8ZT2XdSICvXwo4QG3SIpPe3MMx92q06/view?usp=sharing" className="btn primary" target="_blank">
                Download CV
              </a>
              <a href="#contact" className="btn ghost">
                Let’s talk
              </a>
            </div>
            <div className="hero-pills">
              <Tag>Deep Learning</Tag>
              <Tag>Computer Vision</Tag>
              <Tag>Full-Stack Development</Tag>
              <Tag>Data-Driven Problem Solving</Tag>
            </div>
          </div>
          <div className="hero-card">
            <h3>Current Focus</h3>
            <p>
              Building ML-driven systems that bridge research and product —
              from animal pose estimation to geospatial platforms and POS tools.
            </p>
            <ul className="hero-list">
              <li>Pose estimation on custom pig locomotion dataset</li>
              <li>Efficient visualisation of model performance</li>
              <li>Scalable APIs for real-world applications</li>
            </ul>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" title="About">
          <div className="grid two">
            <p className="text-lg">
              I’m an AI-minded software developer with experience across web,
              mobile, and deep learning. I enjoy working end-to-end: curating
              datasets, training models, and wiring them into products that users
              actually want to use.
            </p>
            <div className="card subtle">
              <h3>What I’m good at</h3>
              <ul className="bullet-list">
                <li>Designing and training deep learning models for vision tasks.</li>
                <li>Building clean, maintainable React / React Native frontends.</li>
                <li>Owning integrations between backend APIs and client apps.</li>
                <li>Explaining complex technical ideas in simple language.</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* AI / ML & SKILLS */}
        <Section id="ai" title="AI / ML & Technical Skills">
          <div className="skills-grid">
            {Object.entries(skills).map(([group, list]) => (
              <div key={group} className="card">
                <h3>{group}</h3>
                <div className="tag-row">
                  {list.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Selected Projects">
          <div className="projects-grid">
            {projects.map((p) => (
              <article key={p.title} className="card project-card">
                <div className="project-header">
                  <h3>{p.title}</h3>
                  <span className="project-period">{p.period}</span>
                </div>
                <p className="project-role">{p.role}</p>
                <p className="project-highlight">{p.highlight}</p>
                <ul className="bullet-list">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* RESEARCH */}
        <Section id="research" title="Research & Publications">
          {research.map((r) => (
            <div key={r.title} className="card">
              <h3>{r.title}</h3>
              <p className="muted">{r.status}</p>
              <p>{r.description}</p>
            </div>
          ))}
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience">
          <div className="grid two stack-on-mobile">
            <div>
              <h3 className="section-subtitle">Tech Experience</h3>
              {experienceTech.map((e) => (
                <article key={`${e.company}-${e.role}`} className="card">
                  <div className="exp-header">
                    <div>
                      <h4>{e.role}</h4>
                      <p className="muted">{e.company}</p>
                    </div>
                    <span className="exp-period">{e.period}</span>
                  </div>
                  <ul className="bullet-list">
                    {e.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div>
              <h3 className="section-subtitle">People-Facing Roles</h3>
              {experienceOther.map((e) => (
                <article
                  key={`${e.company}-${e.role}`}
                  className="card subtle"
                >
                  <div className="exp-header">
                    <div>
                      <h4>{e.role}</h4>
                      <p className="muted">{e.company}</p>
                    </div>
                    <span className="exp-period">{e.period}</span>
                  </div>
                  <ul className="bullet-list">
                    {e.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" title="Education">
          <div className="education-grid">
            {education.map((ed) => (
              <div key={ed.degree} className="card">
                <h3>{ed.degree}</h3>
                <p className="muted">{ed.school}</p>
                <p className="muted">{ed.period}</p>
                <p>{ed.details}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <div className="contact-card">
            <p className="text-lg">
              Want to talk about AI/ML roles, computer vision projects, or
              full-stack development work? I’m always happy to chat.
            </p>
            <div className="contact-links">
              <button
                type="button"
                className="btn primary"
                onClick={handleCopyEmail}
              >
                Email me
              </button>
              <a
                href="https://www.linkedin.com/in/aryaan-vedak"
                target="_blank"
                rel="noreferrer"
                className="btn ghost"
              >
                View LinkedIn
              </a>
            </div>
            <p className="muted">
              Based in Glasgow, UK · Open to AI/ML, Computer Vision, and Software
              Engineering roles.
            </p>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Aryaan Vedak. Built with React & TypeScript.</p>
      </footer>
       {/* Toast / popup */}
      {showCopied && (
        <div className="toast">
          Email copied to clipboard: <span className="toast-email">{EMAIL}</span>
        </div>
      )}
    </div>
  );
};

export default App;
