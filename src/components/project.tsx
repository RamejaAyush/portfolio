import '../styles/project.scss';

const Project = () => {
  return (
    <div className="project-container">
      <div className="header">
        <h1>Projects</h1>
      </div>
      <div className="all-projects">
        <div className="project google-cx">
          <div className="banner">
            <div className="container">
              <h1>Google</h1>
            </div>
          </div>
          <div className="content">
            <div className="title">
              <h1>Google Customer Experience</h1>
            </div>
            <div className="details">
              <p>Full Stack Developer</p>
              <p>Tech Stack: Angular • Node • Express • GCP</p>
            </div>
            <div className="points">
              <div className="about">
                <p>
                  Google CX is an Intuitive Web Application empowering Marketing
                  Managers to strategically engage diverse customer segments via
                  Google Ads and beyond.
                </p>
              </div>
              <ul>
                <li>Built Backend Architecture using Node.js and Big Query.</li>
                <li>Enhanced Login Security with Session Tokens (JWT).</li>
                <li>Improved API performance by 50%.</li>
                <li>Used Google cloud for Deployment & Services.</li>
                <li>Implemented regular feature updated & bug fixes.</li>
                <li>Removed code vulnerabilities with package updates.</li>
              </ul>
            </div>
            <div className="btns">
              <a href="https://www.accenture.com/in-en/services/software-platforms/accenture-google-cloud-business-group">
                See More
              </a>
            </div>
          </div>
        </div>
        <div className="project chubb">
          <div className="content">
            <div className="title">
              <h1>CHUBB: Mergers & Acquisitions</h1>
            </div>
            <div className="details">
              <p>Full Stack Developer</p>
              <p>
                Tech Stack: Angular • Node • Express • Azure • SSMS • Passport
              </p>
            </div>
            <div className="points">
              <div className="about">
                <p>
                  M&A is a pioneering Web Application that revolutionizes the
                  mergers and acquisition landscape by harnessing data science
                  and dynamic web capabilities
                </p>
              </div>
              <ul>
                <li>
                  Developed: Several APIs, 20% faster loading, diverse web
                  pages.
                </li>
                <li>
                  Upgraded code security, Azure deployment, regular updates, bug
                  fixes.
                </li>
                <li>
                  Robust APIs, improved loading time, varied web pages, secure
                  deployment.
                </li>
                <li>
                  Expertise: Several APIs, faster loading, diverse pages,
                  enhanced security.
                </li>
              </ul>
            </div>
            <div className="btns">
              <a href="https://www.chubb.com/us-en/business-insurance/mergers-acquisitions.html">
                See More
              </a>
              {/* <a href="#">Project Reviews</a> */}
            </div>
          </div>
          <div className="banner">
            <div className="container">
              <h1>CHUBB</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="special-mention">
        <div className="container">
          <div className="solid-bg">
            <p>
              In addition to my featured projects, I have a track record of
              success with prestigious clients, internal initiatives at
              Accenture, and captivating freelance projects. I bring a wealth of
              experience, adaptability, and a passion for delivering exceptional
              results to every endeavor I undertake.
            </p>
            <div className="btns">
              {/* <a href="#">Project Reviews</a> */}
              <a href="/#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
