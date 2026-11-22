
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
  Sparkles,
} from "lucide-react";

import "./Home.css";

// Replace this with your actual company number.
// Format: 91 followed by your 10-digit mobile number.
const CONTACT_NUMBER = "919822389582";

const WHATSAPP_LINK = `https://wa.me/${CONTACT_NUMBER}`;
const PHONE_LINK = `tel:+${CONTACT_NUMBER}`;

const APPLY_LINK = "https://forms.gle/o2AX7xMKuonMRBZ17";

function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-bg-shape hero-shape-one"></div>
        <div className="hero-bg-shape hero-shape-two"></div>

        <div className="home-container hero-container">
          <div className="hero-content">
            <div className="hero-label">
              <Sparkles size={16} />
              <span>Ideas to Innovation</span>
            </div>

            <h1>
              Your Vision,
              <br />
              <span>Our Code.</span>
            </h1>

            <p className="hero-description">
              We help businesses and individuals turn ideas into meaningful
              digital solutions through technology, creativity and innovation.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="primary-button">
                Explore Our Services
                <ArrowRight size={18} />
              </a>

              <a href={APPLY_LINK} target="_blank" rel="noreferrer" className="secondary-button">
                Apply Now
              </a>
            </div>

            <div className="hero-trust">
              <span>
                <CheckCircle2 size={16} /> Technology-driven solutions
              </span>
              <span>
                <CheckCircle2 size={16} /> Project-based learning
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-card">
              <div className="code-card-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>onealent.js</span>
              </div>

              <div className="code-content">
                <p><span className="code-purple">const</span> <span className="code-blue">oneAlent</span> = {"{"}</p>
                <p className="code-indent"><span className="code-green">vision</span>: "Your Ideas",</p>
                <p className="code-indent"><span className="code-green">technology</span>: "Our Code",</p>
                <p className="code-indent"><span className="code-green">mission</span>: "Build Innovation"</p>
                <p>{"};"}</p>
                <br />
                <p><span className="code-purple">function</span> <span className="code-yellow">buildFuture</span>() {"{"}</p>
                <p className="code-indent">return "Something Amazing";</p>
                <p>{"}"}</p>
              </div>

              <div className="code-card-footer">
                <span className="code-status"></span>
                Building the future
              </div>
            </div>

            <div className="floating-icon floating-icon-one">
              <Code2 size={25} />
            </div>
            <div className="floating-icon floating-icon-two">
              <Rocket size={25} />
            </div>
            <div className="floating-icon floating-icon-three">
              <Lightbulb size={25} />
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>INNOVATE</span>
          <span className="hero-bottom-line"></span>
          <span>CREATE</span>
          <span className="hero-bottom-line"></span>
          <span>GROW</span>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro-section">
        <div className="home-container intro-container">
          <div>
            <span className="section-eyebrow">WELCOME TO ONEALENT</span>
            <h2>
              Technology that turns
              <span> possibilities into reality.</span>
            </h2>
          </div>

          <p>
            OneAlent is focused on creating digital solutions and providing
            practical project-based learning opportunities. We believe in
            learning by building and growing through innovation.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
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
                Bringing ideas, people and technology together to create
                meaningful digital experiences.
              </p>
            </div>

            <div className="about-small-card">
              <Target size={22} />
              <div>
                <strong>Our Focus</strong>
                <span>Practical Innovation</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-eyebrow">WHO WE ARE</span>
            <h2>
              Building a better
              <span> digital future.</span>
            </h2>

            <p>
              OneAlent is an emerging technology-focused company working
              towards helping businesses transform their ideas into digital
              products and solutions.
            </p>

            <p>
              We also believe students learn best through practical experience.
              That's why we aim to provide project-based learning opportunities
              that help learners develop real-world skills.
            </p>

            <div className="about-points">
              <div>
                <CheckCircle2 size={19} />
                <span>Innovation-focused approach</span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>Practical project experience</span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>Continuous learning and growth</span>
              </div>
            </div>

            <a href="#services" className="text-link">
              Discover what we do <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section section-padding" id="services">
        <div className="home-container">
          <div className="section-heading">
            <span className="section-eyebrow">WHAT WE DO</span>
            <h2>
              Solutions built for
              <span> your next big idea.</span>
            </h2>
            <p>
              We focus on technology and digital solutions that help ideas
              move forward.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon">
                <MonitorSmartphone size={28} />
              </div>
              <h3>Web Development</h3>
              <p>
                Modern, responsive and user-friendly websites designed to
                strengthen your digital presence.
              </p>
              <a href="#contact">
                Discuss your project <ArrowRight size={16} />
              </a>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <Code2 size={28} />
              </div>
              <h3>Software Development</h3>
              <p>
                Technology-driven software solutions designed around your
                business needs and goals.
              </p>
              <a href="#contact">
                Discuss your project <ArrowRight size={16} />
              </a>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <Globe size={28} />
              </div>
              <h3>Digital Solutions</h3>
              <p>
                Helping businesses explore digital opportunities and improve
                their processes with technology.
              </p>
              <a href="#contact">
                Discuss your project <ArrowRight size={16} />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* WHY ONEALENT */}
      <section className="why-section section-padding">
        <div className="home-container">
          <div className="section-heading">
            <span className="section-eyebrow">WHY ONEALENT</span>
            <h2>
              More than ideas.
              <span> Focused on execution.</span>
            </h2>
            <p>
              Our approach is built around understanding, collaboration and
              practical implementation.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon"><Target size={25} /></div>
              <h3>Purpose Driven</h3>
              <p>We begin by understanding the problem and the outcome you need.</p>
            </div>

            <div className="why-card">
              <div className="why-icon"><Users size={25} /></div>
              <h3>Collaborative</h3>
              <p>We value communication, teamwork and shared ideas.</p>
            </div>

            <div className="why-card">
              <div className="why-icon"><Rocket size={25} /></div>
              <h3>Growth Mindset</h3>
              <p>We believe in continuous improvement and learning through action.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT BASED LEARNING */}
      <section className="learning-section section-padding" id="learning">
        <div className="home-container learning-grid">
          <div className="learning-content">
            <span className="section-eyebrow">LEARN BY BUILDING</span>
            <h2>
              Turn your knowledge
              <span> into practical experience.</span>
            </h2>
            <p>
              Explore project-based learning opportunities with OneAlent.
              Work on practical tasks, strengthen your skills and understand
              how projects are approached in real-world environments.
            </p>

            <a href={APPLY_LINK} target="_blank" rel="noreferrer" className="primary-button">
              Apply for Opportunities <ArrowRight size={18} />
            </a>
          </div>

          <div className="learning-visual">
            <div className="learning-card">
              <div className="learning-card-icon">
                <GraduationCap size={34} />
              </div>
              <h3>Learn. Build. Grow.</h3>
              <p>Practical learning through project-based opportunities.</p>
              <div className="learning-tags">
                <span>Learn</span>
                <span>Build</span>
                <span>Improve</span>
              </div>
            </div>
            <div className="learning-decoration">
              <BriefcaseBusiness size={34} />
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="approach-section section-padding" id="approach">
        <div className="home-container">
          <div className="section-heading">
            <span className="section-eyebrow">HOW WE WORK</span>
            <h2>
              From concept to
              <span> creation.</span>
            </h2>
            <p>A clear approach to move your ideas forward.</p>
          </div>

          <div className="approach-grid">
            <div className="approach-step">
              <span>01</span>
              <h3>Understand</h3>
              <p>We understand your idea, requirements and objectives.</p>
            </div>
            <div className="approach-step">
              <span>02</span>
              <h3>Plan</h3>
              <p>We identify the right direction and plan the solution.</p>
            </div>
            <div className="approach-step">
              <span>03</span>
              <h3>Build</h3>
              <p>We work towards developing a practical solution.</p>
            </div>
            <div className="approach-step">
              <span>04</span>
              <h3>Improve</h3>
              <p>We review, refine and improve the outcome.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - NO FOOTER HERE */}
      <section className="contact-section section-padding" id="contact">
        <div className="home-container">
          <div className="contact-box">
            <div className="contact-content">
              <span className="section-eyebrow">LET'S CONNECT</span>
              <h2>
                Have an idea?
                <span> Let's build it together.</span>
              </h2>
              <p>
                Tell us about your project, business requirements or learning
                interests. Let's start a conversation.
              </p>

              <div className="contact-actions">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="whatsapp-button">
                  <MessageCircle size={19} />
                  Chat on WhatsApp
                </a>

                <a href={PHONE_LINK} className="call-button">
                  <Laptop size={18} />
                  Call Us
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
