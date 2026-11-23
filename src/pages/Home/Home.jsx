import {
  ArrowRight,
  Code2,
  Globe,
  Laptop,
  Lightbulb,
  Rocket,
  Users,
  CheckCircle2,
  MonitorSmartphone,
  Mail,
  MessageCircle,
  GraduationCap,
  BriefcaseBusiness,
  Target,
} from "lucide-react";

import "./Home.css";

const CONTACT_NUMBER = "919822389582";
const WHATSAPP_LINK = `https://wa.me/${CONTACT_NUMBER}`;
const PHONE_LINK = `tel:+${CONTACT_NUMBER}`;
const APPLY_LINK = "https://forms.gle/o2AX7xMKuonMRBZ17";
const LINKEDIN_LINK = "https://www.linkedin.com/company/onealent/";

function Home() {
  return (
    <main className="onealent-home">
      {/* HERO */}
      <section className="hero-section" id="home" aria-labelledby="home-title">
        <div className="hero-bg-shape hero-shape-one" aria-hidden="true" />
        <div className="hero-bg-shape hero-shape-two" aria-hidden="true" />

        <div className="home-container hero-container">
          <div className="hero-content">
            <div className="hero-label">
              <GraduationCap size={18} aria-hidden="true" />
              <span>Learn. Build. Grow.</span>
            </div>

            <h1 id="home-title">
              Learn Through Projects,
              <br />
              <span>Build Your Future.</span>
            </h1>

            <p className="hero-description">
              OneAlent helps students develop practical skills through
              project-based learning, hands-on tasks and technology.
              Learn by building and take a step towards your career.
            </p>

            <div className="hero-buttons">
              <a
                href={APPLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Explore Opportunities <ArrowRight size={18} />
              </a>

              <a href="#learning" className="secondary-button">
                How It Works
              </a>
            </div>

            <div className="hero-trust">
              <span>
                <CheckCircle2 size={16} />
                Practical Project-Based Learning
              </span>
              <span>
                <CheckCircle2 size={16} />
                Learn by Building
              </span>
            </div>
          </div>

          <div className="hero-visual" aria-label="A code illustration">
            <div className="code-card">
              <div className="code-card-header">
                <div className="code-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span>onealent.js</span>
              </div>

              <div className="code-content">
                <p>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">student</span> = {"{"}
                </p>
                <p className="code-indent">
                  <span className="code-green">learn</span>: "New Skills",
                </p>
                <p className="code-indent">
                  <span className="code-green">build</span>: "Real Projects",
                </p>
                <p className="code-indent">
                  <span className="code-green">grow</span>: "Career"
                </p>
                <p>{"};"}</p>
                <br />
                <p>
                  <span className="code-purple">function</span>{" "}
                  <span className="code-yellow">buildFuture</span>() {"{"}
                </p>
                <p className="code-indent">return "Keep Learning";</p>
                <p>{"}"}</p>
              </div>

              <div className="code-card-footer">
                <span className="code-status" />
                Building skills for tomorrow
              </div>
            </div>

            <div className="floating-icon floating-icon-one" aria-hidden="true">
              <Code2 size={25} />
            </div>
            <div className="floating-icon floating-icon-two" aria-hidden="true">
              <Rocket size={25} />
            </div>
            <div className="floating-icon floating-icon-three" aria-hidden="true">
              <Lightbulb size={25} />
            </div>
          </div>
        </div>

        <div className="hero-bottom" aria-hidden="true">
          <span>LEARN</span>
          <span className="hero-bottom-line" />
          <span>BUILD</span>
          <span className="hero-bottom-line" />
          <span>GROW</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-section">
        <div className="home-container intro-container">
          <div>
            <span className="section-eyebrow">WELCOME TO ONEALENT</span>
            <h2>
              Turn your learning into
              <span> practical skills.</span>
            </h2>
          </div>

          <p>
            OneAlent is focused on helping students learn through practical
            project-based experiences. We bring learning and technology
            together to help students explore ideas, build projects and
            strengthen their skills.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section section-padding" id="about">
        <div className="home-container about-grid">
          <div className="about-visual">
            <div className="about-main-card">
              <div className="about-icon">
                <Lightbulb size={36} />
              </div>
              <span>Ideas deserve to be built.</span>
              <h3>Think. Create. Innovate.</h3>
              <p>
                Bringing students, ideas and technology together through
                practical learning and innovation.
              </p>
            </div>

            <div className="about-small-card">
              <Target size={22} />
              <div>
                <strong>Our Focus</strong>
                <span>Learning Through Projects</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-eyebrow">ABOUT ONEALENT</span>
            <h2>
              Helping students
              <span> learn by doing.</span>
            </h2>

            <p>
              OneAlent is a technology-focused initiative that aims to connect
              learning with practical experience. We want students to go
              beyond theory and explore how technology is used to build real
              solutions.
            </p>

            <p>
              Through project-based learning opportunities, practical tasks
              and collaboration, students can work towards improving their
              technical knowledge and problem-solving skills.
            </p>

            <div className="about-points">
              <div><CheckCircle2 size={19} /><span>Practical learning approach</span></div>
              <div><CheckCircle2 size={19} /><span>Project-based skill development</span></div>
              <div><CheckCircle2 size={19} /><span>Learning through implementation</span></div>
            </div>

            <a href="#learning" className="text-link">
              Explore project-based learning <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* PROJECT-BASED LEARNING */}
      <section className="learning-section section-padding" id="learning">
        <div className="home-container learning-grid">
          <div className="learning-content">
            <span className="section-eyebrow">LEARN BY BUILDING</span>
            <h2>
              Take your skills
              <span> beyond the classroom.</span>
            </h2>

            <p>
              Explore project-based learning opportunities with OneAlent.
              Work on practical tasks, understand project workflows and
              strengthen your skills by applying what you learn.
            </p>

            <p>
              Opportunities may include mini-projects and internships
              depending on project availability and requirements.
            </p>

            <a
              href={APPLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Apply for Opportunities <ArrowRight size={18} />
            </a>
          </div>

          <div className="learning-visual">
            <div className="learning-card">
              <div className="learning-card-icon">
                <GraduationCap size={34} />
              </div>
              <h3>Learn. Build. Grow.</h3>
              <p>Develop practical skills through project-based learning.</p>
              <div className="learning-tags">
                <span>Learn</span>
                <span>Build</span>
                <span>Improve</span>
              </div>
            </div>

            <div className="learning-decoration" aria-hidden="true">
              <BriefcaseBusiness size={34} />
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING AREAS */}
      <section className="services-section section-padding" id="skills">
        <div className="home-container">
          <div className="section-heading">
            <span className="section-eyebrow">EXPLORE LEARNING AREAS</span>
            <h2>
              Build skills in
              <span> technology and creativity.</span>
            </h2>
            <p>
              Explore different areas of learning and development. Available
              project opportunities depend on current requirements.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon"><MonitorSmartphone size={28} /></div>
              <h3>Web Development</h3>
              <p>
                Explore frontend development, responsive websites, HTML, CSS,
                JavaScript and modern web technologies.
              </p>
              <a href="#contact">Get in Touch <ArrowRight size={16} /></a>
            </article>

            <article className="service-card">
              <div className="service-icon"><Code2 size={28} /></div>
              <h3>Software Development</h3>
              <p>
                Understand programming concepts, application development,
                backend technologies and databases.
              </p>
              <a href="#contact">Get in Touch <ArrowRight size={16} /></a>
            </article>

            <article className="service-card">
              <div className="service-icon"><Globe size={28} /></div>
              <h3>Digital Skills</h3>
              <p>
                Explore digital marketing, content creation, graphic design
                and other creative skills.
              </p>
              <a href="#contact">Get in Touch <ArrowRight size={16} /></a>
            </article>
          </div>
        </div>
      </section>

      {/* WHY ONEALENT */}
      <section className="why-section section-padding">
        <div className="home-container">
          <div className="section-heading">
            <span className="section-eyebrow">WHY LEARN WITH ONEALENT</span>
            <h2>
              Learn with purpose.
              <span> Grow with practice.</span>
            </h2>
            <p>
              We believe practical experience and consistent learning can help
              students become more confident in their skills.
            </p>
          </div>

          <div className="why-grid">
            <article className="why-card">
              <div className="why-icon"><Target size={25} /></div>
              <h3>Practical Approach</h3>
              <p>Apply your knowledge by working on practical tasks and project activities.</p>
            </article>

            <article className="why-card">
              <div className="why-icon"><Users size={25} /></div>
              <h3>Collaboration</h3>
              <p>Learn the value of teamwork, communication and sharing ideas.</p>
            </article>

            <article className="why-card">
              <div className="why-icon"><Rocket size={25} /></div>
              <h3>Continuous Growth</h3>
              <p>Keep improving your knowledge, problem-solving and development skills.</p>
            </article>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SERVICES */}
      <section className="approach-section section-padding" id="services">
        <div className="home-container">
          <div className="section-heading">
            <span className="section-eyebrow">OUR TECHNOLOGY SERVICES</span>
            <h2>
              Digital solutions
              <span> for growing ideas.</span>
            </h2>
            <p>
              Along with our learning initiatives, OneAlent works towards
              helping businesses build and improve their digital presence.
            </p>
          </div>

          <div className="approach-grid">
            <article className="approach-step">
              <span>01</span>
              <h3>Web Development</h3>
              <p>Responsive and user-friendly business websites.</p>
            </article>
            <article className="approach-step">
              <span>02</span>
              <h3>Software Solutions</h3>
              <p>Software designed around business requirements.</p>
            </article>
            <article className="approach-step">
              <span>03</span>
              <h3>Digital Solutions</h3>
              <p>Technology solutions to support digital growth.</p>
            </article>
            <article className="approach-step">
              <span>04</span>
              <h3>Collaboration</h3>
              <p>Discuss your requirements and explore possibilities.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section section-padding" id="contact">
        <div className="home-container">
          <div className="contact-box">
            <div className="contact-content">
              <span className="section-eyebrow">LET'S CONNECT</span>
              <h2>
                Ready to take
                <span> the next step?</span>
              </h2>
              <p>
                Are you a student interested in project-based learning, or a
                business looking for digital solutions? Connect with OneAlent
                and start a conversation.
              </p>

              <div className="contact-actions">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button"
                >
                  <MessageCircle size={19} /> Chat on WhatsApp
                </a>

                <a href={PHONE_LINK} className="call-button">
                  <Laptop size={18} /> Call Us
                </a>

                <a
                  href={LINKEDIN_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-button"
                  aria-label="Visit OneAlent on LinkedIn"
                >
                  <span className="linkedin-icon" aria-hidden="true">in</span>
                  Follow Us on LinkedIn
                </a>
              </div>
            </div>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon"><Mail size={21} /></div>
                <div>
                  <span>Email Us</span>
                  <a href="mailto:info@onealent.com">info@onealent.com</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon"><MessageCircle size={21} /></div>
                <div>
                  <span>Contact Number</span>
                  <a href={PHONE_LINK}>+91 9822389582</a>
                </div>
              </div>

              <div className="contact-note">
                <CheckCircle2 size={17} />
                <span>We look forward to hearing from you.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;