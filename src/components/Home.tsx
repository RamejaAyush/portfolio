import { motion } from "framer-motion"; // Import motion from Framer Motion
import "../styles/components/home.scss";
import LandingVideo from "../assets/video/landing1.mp4";
import LandingVideo2 from "../assets/video/landing3.mp4";

const Home = () => {
  const videos = [LandingVideo, LandingVideo2];
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  // Animation Variants for Framer Motion
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
  };

  const subTitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } },
  };

  const videoWrapperVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.6 } },
  };

  return (
    <div className="home">
      <motion.div
        className="heading"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <div className="title">
          <p>Innovative Solutions</p>
          <p className="bold">Swift Execution</p>
        </div>
        <motion.div
          className="sub-title"
          initial="hidden"
          animate="visible"
          variants={subTitleVariants}
        >
          <p>
            Blending design and function to craft engaging experiences that
            simplify complexity and surpass expectations.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="visual"
        initial="hidden"
        animate="visible"
        variants={videoWrapperVariants}
      >
        <div className="video-wrapper">
          <video autoPlay={true} muted loop>
            <source src={randomVideo} type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
