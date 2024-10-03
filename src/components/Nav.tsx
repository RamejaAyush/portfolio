import "../styles/nav.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Nav = () => {
  const MotionLink = motion(Link);
  const currentRoute: string = "About";
  const [showExternal, setShowExternal] = useState(false);
  const [navClass, setNavClass] = useState<string>("grey");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setNavClass("themed");
        setShowExternal(true);
      } else {
        setNavClass("grey");
        setShowExternal(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.nav className="nav">
      <motion.div
        className={`nav__wrapper ${navClass}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MotionLink
          to={"/"}
          className="nav__wrapper__logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1>AXU</h1>
          <span className="nav__wrapper__logo__current-route">
            {currentRoute}
          </span>
        </MotionLink>

        <div className="nav__wrapper__links">
          <div className="nav__wrapper__links__wrapper">
            {["About", "Projects", "Contact"].map((link, i) => (
              <motion.div
                key={link}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                className="nav__wrapper__links__wrapper__link"
              >
                <Link to={link === "About" ? "/" : `/#${link.toLowerCase()}`}>
                  {link}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        {["Blogs", "Resume"].map((externalLink: string, i: number) => (
          <motion.div
            key={externalLink}
            custom={i}
            className="nav__wrapper__external"
            initial={{ opacity: 0, height: 0, padding: 0, width: 0 }}
            animate={
              showExternal
                ? {
                    opacity: 1,
                    height: "auto",
                    width: "auto",
                    marginLeft: "0.5vw",
                    y: 0,
                  }
                : {
                    opacity: 0,
                    height: 0,
                    padding: 0,
                    width: 0,
                    marginLeft: 0,
                    y: 10,
                  }
            }
            transition={{ delay: i * 0.1 + 0.3 }}
            style={{ pointerEvents: showExternal ? "auto" : "none" }}
          >
            <Link
              className={`${externalLink.toLocaleLowerCase()}-link`}
              to={externalLink === "Blogs" ? "/blogs" : "/resume"}
            >
              {externalLink}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Nav;
