import "../styles/resume.scss";
import ResumeFile from "../assets/resume/Ayush Rameja's Resume.pdf";

const Resume = () => {
  return (
    <div className="resume">
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
