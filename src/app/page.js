import Image from "next/image";
import Header from "../components/Header";
import avatar from "../../public/avatar.jpg";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "MongoDB",
  "Node.js",
  "Express.Js",
  "Redux",
  "Wordpress",
  "PHP",
  "Tailwind",
];
const projects = [
  { id: 1, title: "Dashboard UI", gradient: "grad-1" },
  { id: 2, title: "Landing Page", gradient: "grad-2" },
  { id: 3, title: "E-commerce", gradient: "grad-3" },
  { id: 4, title: "Design System", gradient: "grad-4" },
];

export default function Page() {
  return (
    <>
      <Header />

      {/* HERO */}
      <header className="section hero">
        <div className="card hero-inner">
          <div className="hero-grid">
            <div>
              <h1 className="hero-title">
                Front-End
                <br className="hide-sm" /> Developer
              </h1>
              <p className="muted">
                I create modern, accessible, and responsive web applications.
                Let’s build something delightful together.
              </p>
              <div className="cta-row">
                <a
                  href="https://www.upwork.com/"
                  target="_blank"
                  className="btn-primary"
                  rel="noreferrer"
                >
                  Hire Me on Upwork
                </a>
                <a href="#projects" className="btn-ghost">
                  View Projects
                </a>
              </div>
            </div>

            <div className="avatar-wrap">
              <div className="card avatar-card">
                <Image
                  src="/avatar.jpg"
                  alt="Developer avatar"
                  width={320}
                  height={320}
                  className="avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2 className="h2">About Me</h2>

        {/* two coordinated cards instead of one giant card */}
        <div className="about-grid">
          {/* text card */}
          <article className="card about-text">
            <p className="lead">
              I’m Majeed Abro, a passionate front-end engineer focused on
              crafting fast, beautiful, and accessible interfaces. I specialize
              in modern React, TypeScript, CSS architecture, and design systems.
            </p>
            <p className="muted">
              I’ve delivered growth-driving web products for startups and SMBs,
              with Top-Rated history on Upwork.
            </p>

            {/* optional quick facts */}
            <ul className="about-facts">
              <li>5+ years building with React/Next</li>
              <li>Design systems & accessibility first</li>
              <li>130+ Upwork reviews · 4.9/5</li>
            </ul>
          </article>

          {/* gallery card */}
          <aside className="card about-gallery">
            <div className="thumbs">
              <figure className="thumb">
                <Image
                  src="https://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg"
                  alt="Project management board on a desk"
                  width={800}
                  height={600}
                  className="thumb-img"
                  priority
                />
              </figure>

              <figure className="thumb">
                <Image
                  src="https://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg"
                  alt="Project planning session"
                  width={800}
                  height={600}
                  className="thumb-img"
                />
              </figure>

              <figure className="thumb">
                <Image
                  src="https://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg"
                  alt="Kanban workflow"
                  width={800}
                  height={600}
                  className="thumb-img"
                />
              </figure>

              <figure className="thumb">
                <Image
                  src="https://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg"
                  alt="Roadmap timeline"
                  width={800}
                  height={600}
                  className="thumb-img"
                />
              </figure>

              <figure className="thumb">
                <Image
                  src="https://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg"
                  alt="Team milestones"
                  width={800}
                  height={600}
                  className="thumb-img"
                />
              </figure>

              <figure className="thumb">
                <Image
                  src="https://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg"
                  alt="Progress tracking"
                  width={800}
                  height={600}
                  className="thumb-img"
                />
              </figure>
            </div>
          </aside>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-head">
          <h2 className="h2">Skills</h2>
          <span className="muted">Toolbox</span>
        </div>
        <div className="card badges">
          {skills.map((s) => (
            <span key={s} className="badge">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
  <h2 className="h2">Experience & Upwork</h2>

  <div className="grid-2 gap exp-grid">
    {/* row 1 */}
    <article className="card p exp-card">
      <header className="row exp-meta">
        <h3 className="h3">Senior Front-End Developer</h3>
        <span className="exp-dates">2018 — Present</span>
      </header>
      <p className="muted mt">Tech Company · React, Next.js, CSS architecture</p>
    </article>

    <div className="card p row-between upwork-card">
      <div>
        <h3 className="h3">Upwork Top Rated</h3>
        <p className="muted small">130+ reviews · 4.9/5</p>
      </div>
      <div className="stars"><i/><i/><i/><i/><i/></div>
    </div>

    {/* row 2 */}
    <article className="card p exp-card">
      <header className="row exp-meta">
        <h3 className="h3">UI Developer</h3>
        <span className="exp-dates">2021 — 2023</span>
      </header>
      <p className="muted mt">Freelance · Component libraries, animations, accessibility</p>
    </article>

    <div className="card p">
      <p className="muted small">Clients</p>
      <div className="logo-grid">
        <div className="logo"/><div className="logo"/><div className="logo"/><div className="logo"/>
      </div>
    </div>
  </div>
</section>


      {/* PORTFOLIO */}
      <section id="projects" className="section">
        <h2 className="h2">Portfolio</h2>
        <div className="grid-4 gap">
          {projects.map((p) => (
            <article key={p.id} className="portfolio-card">
              <div className={`thumb-square ${p.gradient}`} />
              <div className="portfolio-meta">
                <h3 className="h4">{p.title}</h3>
                <span className="muted small">View</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <h2 className="h2">Testimonials</h2>
        <div className="grid-2 gap">
          <blockquote className="card p">
            <p className="quote">
              “Ricardo delivered on time with exceptional quality and clean
              code. Highly recommended.”
            </p>
            <footer className="muted mt">— Emily S., Product Lead</footer>
          </blockquote>
          <blockquote className="card p">
            <p className="quote">
              “Great communicator and pixel-perfect builds. Will hire again.”
            </p>
            <footer className="muted mt">— John D., Founder</footer>
          </blockquote>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2 className="h2">Contact</h2>
        <form className="card form">
          <div className="grid-2 gap">
            <div>
              <label className="label">Name</label>
              <input className="input" placeholder="Your name" />
            </div>
            <div>
              <label className="label">Email</label>
              <input
                className="input"
                placeholder="you@example.com"
                type="email"
              />
            </div>
          </div>
          <div className="mt">
            <label className="label">Message</label>
            <textarea
              className="textarea"
              placeholder="Tell me about your project..."
            />
          </div>
          <div className="row-between mt">
            <div className="socials">
              <a
                className="btn-ghost small"
                href="https://github.com/"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="btn-ghost small"
                href="https://twitter.com/"
                target="_blank"
              >
                Twitter/X
              </a>
              <a
                className="btn-ghost small"
                href="https://www.linkedin.com/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
            <button className="btn-primary" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </section>

      <footer className="section footer">
        © {new Date().getFullYear()} Majeed Abro
      </footer>
    </>
  );
}
