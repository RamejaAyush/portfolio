import "../styles/resume.scss";
import { Link } from "react-router-dom";
import ResumeFile from "../assets/resume/Ayush Rameja's Resume.pdf";

const Resume = () => {
  return (
    <div className="resume">
      <nav className="resume__nav">
        <div className="resume__nav__logo">
          <h1>AXU</h1>
          <span className="badge">Resume</span>
        </div>
        <div className="resume__nav__link">
          <Link to={"/"}>Portfolio</Link>
        </div>
      </nav>
      <div className="resume__content">
        <iframe
          src={ResumeFile}
          title="Ayush Rameja's Resume"
          className="resume__iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
