import "./index.css";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import resume from "./assets/ANILITTY_LD_Resume.pdf";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          window.scrollY >= element.offsetTop - 200 &&
          window.scrollY < element.offsetTop + element.offsetHeight
        ) {
          setActive(section);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar">
      <div className="logo">Anilitty_LD</div>

      <div className="nav-links">
        <a href="#home" className={active === "home" ? "active" : ""}>
          Home
        </a>

        <a href="#about" className={active === "about" ? "active" : ""}>
          About
        </a>

        <a href="#skills" className={active === "skills" ? "active" : ""}>
          Skills
        </a>

        <a href="#projects" className={active === "projects" ? "active" : ""}>
          Projects
        </a>

        <a href="#contact" className={active === "contact" ? "active" : ""}>
          Contact
        </a>
      </div>
    </div>
  );
}

function Home() {
  return (
    <section id="home">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "55px" }}
      >
        ANILITTY LD
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ fontSize: "28px", marginBottom: "20px" }}
      >
        <ReactTyped
          strings={["Java Developer", "Full Stack Developer"]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </motion.h2>

      <p>Aspiring Full Stack Developer with hands-on experience in building responsive web applications using React and Firebase.
Strong foundation in Java and problem-solving, seeking opportunities to contribute and grow in a dynamic IT environment.
       
      </p>
      <a href={resume} download="ANILITTY_LD_Resume.pdf" className="resume-btn">
  Download Resume
</a>
      <div className="social-links">
        <a href="https://github.com/ANILITTY" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/anilitty-ld-3162422a4"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
function About() {
  return (
    <section id="about" className="about-section">
      <h1>About Me</h1>

      <div className="about-content">
        <p>
          I am <strong>ANILITTY LD</strong>, a third-year Computer Science Engineering student with a strong foundation in web technologies and software development. I specialize in building responsive web applications using React, Firebase, HTML, CSS, and JavaScript. I also have a solid foundation in Java and MySQL, supported by certification in Programming using Java from Infosys Springboard. </p>

        <p>
        Through internships at Test Yantra Software Solutions and CodeAlpha, I gained practical experience in frontend development, Firebase-based backend integration, and application deployment. I have developed projects such as a dynamic E-Commerce platform with secure payment integration and a real-time Music Player Web Application using Firebase.
        </p>

        <p>
     With a CGPA of 8.3, strong problem-solving skills, and certifications in Web Application Development and Programming using Java, I am passionate about continuous learning and building impactful digital solutions. I am currently seeking placement opportunities where I can apply my technical knowledge and grow as a Full Stack Developer. </p>
      </div>
    </section>
  );
}
function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h1>Technical Skills & Soft Skills</h1>

      <div className="skills-wrapper">

        {/* Programming */}
        <div className="skill-category">
          <h2>Programming</h2>
          <div className="skills-list">
            <span>Java</span>
            <span>Python</span>
          </div>
        </div>

        {/* Frontend */}
        <div className="skill-category">
          <h2>Frontend Technologies</h2>
          <div className="skills-list">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>

        {/* Backend & Database */}
        <div className="skill-category">
          <h2>Backend & Database</h2>
          <div className="skills-list">
            <span>Firebase (Auth & Firestore)</span>
            <span>MySQL</span>
          </div>
        </div>
       
        {/* Tools */}
        <div className="skill-category">
          <h2>Tools & Technologies</h2>
          <div className="skills-list">
            <span>GitHub</span>
            <span>VS Code</span>
          </div>
        </div>
 {/*Database */}
        <div className="skill-category">
          <h2>Soft Skills</h2>
          <div className="skills-list">
            <span>Communication</span>
            <span>Teamwork</span>
            <span>Time Management</span>
            <span>Problem Solving</span>
</div>
</div>
      </div>
    </section>
  );
}
function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h1>Featured Projects</h1>

      <div className="projects-container">

        {/* Project 1 */}
        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>E-Commerce Platform</h2>

          <p>
            Developed a full-stack E-Commerce platform with secure user
            authentication, dynamic product listing, shopping cart system,
            and Razorpay payment integration. Implemented Firestore-based
            order management and admin dashboard.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Firebase</span>
            <span>Razorpay</span>
            <span>Firestore</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/ANILITTY/music-application" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </motion.div>
{/* Project 2 */}
        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Music Player Web Application</h2>

          <p>
            Developed a real-time Music Player Web Application using React
            and Firebase with authentication and Firestore database
            integration. Implemented dynamic song listing, play/pause
            controls, playlist management, and responsive UI design.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Firebase</span>
            <span>JavaScript</span>
            <span>Firestore</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/ANILITTY/music-application" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </motion.div>
<motion.div
  className="project-card"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2>Calculator App</h2>
  <p>
    A responsive calculator built with HTML, CSS, and JavaScript. 
    Supports basic arithmetic, decimal input, operator replacement, keyboard support, and error handling.
  </p>
  <div className="tech-stack">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
  </div>
  <div className="project-links">
    <a href="https://github.com/ANILITTY/calc1" target="_blank" rel="noreferrer">
      GitHub
    </a>
   
  </div>
</motion.div>
<motion.div
  className="project-card"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2>Image Gallery</h2>
  <p>
    A dynamic image gallery with filterable categories, responsive grid layout,
    and a lightbox with navigation. Built using HTML, CSS, and JavaScript.
  </p>
  <div className="tech-stack">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
  </div>
  <div className="project-links">
    <a href="https://github.com/ANILITTY/repo1" target="_blank" rel="noreferrer">
      GitHub
    </a>
   
  </div>
</motion.div>
      </div>
    </section>
  );
}
// 
function Contact() {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
  <p>If you want to discuss a project, internship, or job opportunity, feel free to reach out!</p>

      <div className="contact-info">
        <p><strong>Email:</strong> ldanilitty2006@gmail.com</p>
        <p><strong>GitHub:</strong> https://github.com/ANILITTY</p>
        <p><strong>LinkedIn:</strong> https://www.linkedin.com/in/anilitty-ld-3162422a4</p>
        <p><strong>Location:</strong> India</p>
      </div>
    </section>
  );
}

export default App;