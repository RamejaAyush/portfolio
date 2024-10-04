import "../styles/resume.scss";
import { motion } from "framer-motion";
import ResumeFile from "../assets/resume/Ayush Rameja's Resume.pdf";

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const iframeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="resume"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="resume__content" variants={iframeVariants}>
        <motion.iframe
          src={ResumeFile}
          title="Ayush Rameja's Resume"
          className="resume__iframe"
          variants={iframeVariants}
        ></motion.iframe>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
