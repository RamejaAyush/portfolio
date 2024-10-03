import "../styles/home.scss";
import { Link } from "react-router-dom";
import { IProject } from "../models/IProject";
import { projects } from "../utils/projectData";
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
                  <Link to={"/resume"}>
                    <div className="home__landing__wrapper__content__introduction__cta__projects__text">
                      <p>{`< Resume Rundown >`}</p>
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
                  <Link to={"/blogs"}>
                    <div className="home__landing__wrapper__content__introduction__cta__blogs__text">
                      <p>{`< Blog Overflow >`}</p>
                    </div>
                    <div className="home__landing__wrapper__content__introduction__cta__blogs__preview">
                      <div className="home__landing__wrapper__content__introduction__cta__blogs__preview__wrapper">
                        <div className="home__landing__wrapper__content__introduction__cta__blogs__preview__wrapper__outer-layer">
                          <div className="home__landing__wrapper__content__introduction__cta__blogs__preview__wrapper__outer-layer__text">
                            <p>
                              <span className="trade">AXU</span>{" "}
                              <span className="badge">blogs</span>
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
      <div className="home__projects">
        <div className="home__projects__header">
          <p>
            Behind the Code: <span className="gradient">My Story</span>
          </p>
        </div>
        <div className="home__projects__container">
          {projects.map((project: IProject) => (
            <div
              className={`home__projects__container__project ${project.id}`}
              key={project.id}
            >
              <div className="home__projects__container__project__client">
                <div className="home__projects__container__project__client__wrapper">
                  <h1>{project.client}</h1>
                </div>
              </div>
              <div className="home__projects__container__project__content">
                <div className="home__projects__container__project__content__name">
                  <h1>{project.name}</h1>
                </div>
                <div className="home__projects__container__project__content__role">
                  <p>{project.role}</p>
                </div>
                <div className="home__projects__container__project__content__skills">
                  <p>{project.skills.join(", ")}</p>
                </div>
                <div className="home__projects__container__project__content__points">
                  <ul>
                    {project.points.map((point: string, index: number) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="home__projects__container__project__content__cta">
                  <Link to={`${project.link}`}>See More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="home__contact">
        <div className="home__contact__wrapper">
          <div className="home__contact__wrapper__form">
            <div className="home__contact__wrapper__form__header">
              <h1>
                Ping Me, <span className="gradient">Let's Make Magic</span>
              </h1>
            </div>
            <div className="home__contact__wrapper__form__inputs">
              <form>
                <div className="name">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Please enter your name… if you dare."
                  />
                </div>
                <div className="message">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    placeholder="Say something smart or funny, no pressure."
                  ></textarea>
                </div>
                <div className="submit">
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
          <div className="home__contact__wrapper__links">
            <div className="home__contact__wrapper__links__header">
              <h1>Links</h1>
            </div>
            <div className="home__contact__wrapper__links__buttons">
              <Link to={"/"}>Mail</Link>
              <Link to={"/"}>LinkedIn</Link>
              <Link to={"/"}>GitHub</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
