import "../styles/components/floatingBar.scss";
import StaggeredText from "../utils/StaggerText";

const FloatingBar = () => {
  return (
    <nav className="floating-bar grid place-items-center">
      <div className="nav-wrapper flex align-items-center">
        <div className="logo flex align-items-center">
          <p>AR</p>
        </div>
        <div className="inner-links flex align-items-center">
          <a className="tdn active" href="#">
            <StaggeredText text="About" />
          </a>
          <a className="tdn" href="#">
            <StaggeredText text="Projects" />
          </a>
          <a className="tdn" href="#">
            <StaggeredText text="Contact" />
          </a>
        </div>
        <div className="outer-links flex align-items-center">
          <a className="tdn dark" href="#">
            <StaggeredText text="Blogs" />
          </a>
          <a className="tdn dark" href="#">
            <StaggeredText text="Resume" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default FloatingBar;
