import "../styles/portfolio.css";
import DATA from "../data/data";

import Navbar from "../components/Navbar";
import AvailableBadge from "../components/AvailableBadge";
import CodeWindow from "../components/CodeWindow";
import Section from "../components/Section";
import StatItem from "../components/StatItem";
import SkillCard from "../components/SkillCard";
import EduCard from "../components/EduCard";
import ProjectCard from "../components/ProjectCard";
import ContactDetail from "../components/ContactDetail";
import SocialBtn from "../components/SocialBtn";
import ContactForm from "../components/ContactForm";
import { GithubIcon, LinkedinIcon, EmailIcon } from "../components/Icons";

const {
  name,
  initials,
  tagline,
  available,
  about,
  stats,
  skills,
  education,
  projects,
  contact,
} = DATA;

const navLinks = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export default function Portfolio() {
  return (
    <>
      <Navbar name={name} initials={initials} links={navLinks} />

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-glow" />
        <div className="hero-glow2" />
        <div>
          <AvailableBadge available={available} />
          <h1 className="hero-title">
            Construyendo
            <br />
            <span className="accent">APIs Seguras</span>
            <br />
            &amp; Escalables.
          </h1>
          <p className="hero-desc">{tagline}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Ver proyectos →
            </a>
            <a href="#contact" className="btn-outline">
              Hablar conmigo
            </a>
          </div>
        </div>
        <CodeWindow />
      </section>

      {/* ABOUT */}
      <Section id="about">
        <div className="about-grid">
          <div className="about-photo">
            <svg
              className="about-avatar"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="72" r="38" fill="#94a3b8" />
              <path
                d="M30 180c0-38.66 31.34-70 70-70s70 31.34 70 70"
                fill="#94a3b8"
              />
            </svg>
          </div>
          <div className="about-text">
            <h2>Sobre mí</h2>
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="stats-row">
              {stats.map((s) => (
                <StatItem key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section
        id="skills"
        alt
        head="Arsenal Técnico"
        sub="Las herramientas y tecnologías que uso en cada proyecto."
      >
        <div className="skills-grid">
          {skills.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section
        id="education"
        head="Educación & Certificaciones"
        sub="Mi formación académica y profesional."
      >
        <div className="edu-grid">
          {education.map((e) => (
            <EduCard key={e.title} {...e} />
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section
        id="projects"
        alt
        head="Proyectos Personales y Académicos"
        sub="Una selección de mi trabajo de práctica y aprendizaje."
      >
        <div className="projects-grid">
          {projects
            .sort((a, b) => a.id - b.id)
            .map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        head="Hablemos"
        sub="Estoy abierto a primeras oportunidades y colaboraciones."
      >
        <div className="contact-grid">
          <div className="contact-info">
            <h2>
              ¿Necesitás un
              <br />
              Backend Developer?
            </h2>
            <p>
              Estoy buscando mi primera oportunidad profesional. Si tenés un
              proyecto interesante o una posición junior, escribime — con mucho
              gusto hablamos.
            </p>
            <ContactDetail
              icon="📧"
              label="EMAIL"
              value={contact.email}
              href={`mailto:${contact.email}`}
            />
            <ContactDetail
              icon="📍"
              label="UBICACIÓN"
              value={contact.location}
            />
            <div className="socials">
              <SocialBtn href={contact.github} title="GitHub">
                {" "}
                <GithubIcon />{" "}
              </SocialBtn>
              <SocialBtn href={contact.linkedin} title="LinkedIn">
                {" "}
                <LinkedinIcon />{" "}
              </SocialBtn>
              <SocialBtn href={`mailto:${contact.email}`} title="Email">
                {" "}
                <EmailIcon />{" "}
              </SocialBtn>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="footer ">
        <span>
          © {new Date().getFullYear()} {name}. Creado con React y Vite, diseño
          con IA.
        </span>
      </footer>
    </>
  );
}
