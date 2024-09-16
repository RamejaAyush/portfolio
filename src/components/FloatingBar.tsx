import useStore from "../store/store";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/components/floatingBar.scss";
import StaggeredText from "../utils/StaggerText";
import { easeInOut, motion } from "framer-motion";

const MotionLink = motion.create(Link);

const FloatingBar = () => {
  const { route } = useStore();
  const outerLinks: string[] = ["Blogs", "Resume"];
  const links: string[] = ["About", "Projects", "Contact"];

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentRoute, setCurrentRoute] = useState<string>(route);
  const [isAnimatingOut, setIsAnimatingOut] = useState<boolean>(false);
  const [isContentUpdated, setIsContentUpdated] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;

      setIsVisible(
        route.toLowerCase() === "about" ? scrolled > 0.2 * viewportHeight : true
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [route]);

  useEffect(() => {
    setIsAnimatingOut(true);

    const exitAnimationTimeout = setTimeout(() => {
      setIsContentUpdated(false);
    }, 50);

    const entryAnimationTimeout = setTimeout(() => {
      setIsAnimatingOut(false);
      setIsContentUpdated(true);
      setCurrentRoute(route);
    }, 550);

    return () => {
      clearTimeout(exitAnimationTimeout);
      clearTimeout(entryAnimationTimeout);
    };
  }, [route]);

  const navVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const wrapperVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeInOut, staggerChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0.5 },
    visible: { opacity: 1 },
    exit: { opacity: 0.5, transition: { duration: 0.5 } },
  };

  return (
    <motion.div>
      {isVisible && (
        <motion.nav
          key="bottom-nav"
          className={`floating-bar grid place-items-center ${
            isAnimatingOut ? "no-click" : ""
          }`}
          variants={navVariants}
          initial="hidden"
          animate={isAnimatingOut ? "exit" : "visible"}
          style={{ pointerEvents: isAnimatingOut ? "none" : "auto" }}
        >
          {isContentUpdated && (
            <motion.div
              className="nav-wrapper flex align-items-center"
              variants={wrapperVariants}
            >
              <motion.div
                className="logo flex align-items-center"
                variants={linkVariants}
              >
                <div className="logo-wrapper flex align-items-center">
                  <p>AR</p>
                  <span className="title">{currentRoute}</span>
                </div>
              </motion.div>
              <motion.div
                className="inner-links flex align-items-center"
                variants={navVariants}
              >
                {links.map((text) => (
                  <motion.a
                    key={text}
                    className={`tdn ${
                      text.toLowerCase() === "about" ? "active" : ""
                    }`}
                    href="#"
                    variants={linkVariants}
                  >
                    <StaggeredText text={text} />
                  </motion.a>
                ))}
              </motion.div>
              <motion.div
                className="outer-links flex align-items-center"
                variants={navVariants}
              >
                {outerLinks.map((text) => (
                  <MotionLink
                    key={text}
                    className="tdn dark"
                    to={`/${text.toLowerCase()}`}
                    variants={linkVariants}
                  >
                    <StaggeredText text={text} />
                  </MotionLink>
                ))}
              </motion.div>
            </motion.div>
          )}
        </motion.nav>
      )}
    </motion.div>
  );
};

export default FloatingBar;
