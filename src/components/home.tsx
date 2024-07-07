import "../styles/home.scss";
import Project from "./project";
import Contact from "./contact";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image from "../assets/home-bg.png";
import { useState, useEffect } from "react";
import PageTranstition from "./pageTranstition";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    document.title = "About: Ayush Rameja";
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setImageLoaded(true);
  }, [imageLoaded]);

  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = window.innerHeight;

      if (scrollPosition >= scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const childVariants = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0 },
  };

  const navClassName = isScrolled ? "nav-container scrolled" : "nav-container";

  return (
    <PageTranstition>
      <div
        className="home"
        style={
          imageLoaded
            ? { backgroundImage: `url(${image})` }
            : { backgroundColor: "black" }
        }
      >
        <nav>
          <div className={navClassName}>
            <div className="logo">
              <p>Ayush Rameja</p>
            </div>
            <div className="nav-links">
              <Link to={"/resume"}>
                <span data-hover="Resume">Resume</span>
              </Link>
            </div>
          </div>
        </nav>
        <motion.div
          data-scroll-section
          className="main-content"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div data-scroll className="headline" variants={childVariants}>
            <motion.h1
              data-scroll
              variants={childVariants}
              transition={{ duration: 1.5 }}
            >
              Creating
            </motion.h1>
            <motion.h1
              data-scroll
              variants={childVariants}
              transition={{ duration: 1.5, delay: 0.1 }}
            >
              User Experience
            </motion.h1>
            <motion.div
              variants={childVariants}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="animate-text"
            >
              <Link to={"/"}>
                <span data-hover="Clean">Clean</span>
              </Link>
              <p>&</p>
              <Link to={"/"}>
                <span data-hover="Appealing">Appealing</span>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={childVariants}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="about-me"
          >
            <motion.div className="desg">
              <motion.h1>Ayush Rameja</motion.h1>
              <motion.p>Web Developer • UI Designer</motion.p>
            </motion.div>
            <div className="information">
              <p>
                A creative developer with a proven track record of delivering
                unique and visually appealing websites and designs.
              </p>
              <div className="btns">
                <Link to={"/blogs"}>Blogs</Link>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div id="projects" className="project">
          <Project />
        </div>
        <div id="contact" className="contact">
          <Contact />
        </div>
      </div>
    </PageTranstition>
  );
};

export default Home;
