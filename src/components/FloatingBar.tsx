import { useEffect } from "react";
import useStore from "../store/store";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/components/floatingBar.scss";
import StaggeredText from "../utils/StaggerText";
import {
  navVariants,
  wrapperVariants,
  linkVariants,
} from "../animations/animations";

const MotionLink = motion.create(Link);

const FloatingBar = () => {
  const {
    route,
    currentRoute,
    isAnimatingOut,
    isContentUpdated,
    isVisible,
    setIsAnimatingOut,
    setIsContentUpdated,
    setCurrentRoute,
    setIsVisible,
  } = useStore();

  const outerLinks: string[] = ["Blogs", "Resume"];
  const links: string[] = ["About", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;

      setIsVisible(
        route.toLowerCase() === "home" ? scrolled > 0.2 * viewportHeight : true
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [route, setIsVisible]);

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
  }, [route, setIsAnimatingOut, setIsContentUpdated, setCurrentRoute]);

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
                <MotionLink
                  to={"/"}
                  className="tdn logo-wrapper flex align-items-center"
                >
                  <p>AR</p>
                  <span className="title">{currentRoute}</span>
                </MotionLink>
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
