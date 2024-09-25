import "../styles/home.scss";
import { Link } from "react-router-dom";
import profilePic from "../assets/image/profile.png";
import backgroundVideo from "../assets/video/bg-video.mp4";

const Home = () => {
  return (
    <div className="home">
      <div className="home__landing">
        <div className="home__landing__wrapper">
          <div className="home__landing__wrapper__content">
            <div className="home__landing__wrapper__content__introduction">
              <div className="home__landing__wrapper__content__introduction__title">
                <div className="home__landing__wrapper__content__introduction__title__profile-picture">
                  <img src={profilePic} alt="Ayush Rameja" />
                </div>
                <div className="home__landing__wrapper__content__introduction__title__header">
                  <div className="home__landing__wrapper__content__introduction__title__header__designation">
                    <p>I'm Ayush Rameja,</p>
                    <p>
                      Software Engineer at <span className="bold">Siemens</span>
                    </p>
                  </div>
                  <div className="home__landing__wrapper__content__introduction__title__header__description">
                    <p>
                      Blending design and function to craft engaging experiences
                      that simplify complexity and surpass expectations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="home__landing__wrapper__content__introduction__cta">
                <div className="home__landing__wrapper__content__introduction__cta__projects">
                  <Link to={"/project"}>
                    <div className="home__landing__wrapper__content__introduction__cta__projects__text">
                      <p>{`< Code Creations >`}</p>
                    </div>
                    <div className="home__landing__wrapper__content__introduction__cta__projects__preview">
                      <div className="home__landing__wrapper__content__introduction__cta__projects__preview__wrapper">
                        <div className="home__landing__wrapper__content__introduction__cta__projects__preview__wrapper__outer-layer">
                          <div className="home__landing__wrapper__content__introduction__cta__projects__preview__wrapper__outer-layer__text">
                            <p>Google AIRP Cx</p>
                          </div>
                          <div className="home__landing__wrapper__content__introduction__cta__projects__preview__wrapper__outer-layer__bottom"></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="home__landing__wrapper__content__introduction__cta__blogs">
                  <Link to={"/project"}>
                    <div className="home__landing__wrapper__content__introduction__cta__blogs__text">
                      <p>{`< Blog Overflow >`}</p>
                    </div>
                    <div className="home__landing__wrapper__content__introduction__cta__blogs__preview">
                      <div className="home__landing__wrapper__content__introduction__cta__blogs__preview__wrapper">
                        <div className="home__landing__wrapper__content__introduction__cta__blogs__preview__wrapper__outer-layer">
                          <div className="home__landing__wrapper__content__introduction__cta__blogs__preview__wrapper__outer-layer__text">
                            <p>
                              <span className="trade">AXU</span>{" "}
                              <span className="badge">• blogs</span>
                            </p>
                          </div>
                          <div className="home__landing__wrapper__content__introduction__cta__blogs__preview__wrapper__outer-layer__bottom"></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="home__landing__wrapper__content__experience">
              <div className="home__landing__wrapper__content__experience__content">
                <p>
                  I'm a CS Engineer turned software developer with a{" "}
                  <span className="bold">
                    flair for design, creating seamless digital experiences.
                  </span>
                </p>
                <p>
                  With 4+ years in turning ideas into slick websites, blending
                  code with creativity.
                </p>
                <p>
                  Worked with giants like Google, CHUBB, Siemens, and
                  Coinnection, making designs that stand out.
                </p>
              </div>
              <div className="home__landing__wrapper__content__experience__previous">
                <p className="small">PREVIOUSLY</p>
                <p>
                  Worked as a full stack developer at Accenture AI (prev.
                  Bridgei2i)
                </p>
              </div>
            </div>
          </div>
          <div className="home__landing__wrapper__video">
            <video autoPlay={true} muted loop>
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
