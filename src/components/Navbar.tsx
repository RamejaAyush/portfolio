import "../styles/components/navbar.scss";
import StaggeredText from "../utils/StaggerText";

const Navbar = () => {
  return (
    <nav className="flex align-items-center justify-content-between">
      <div className="logo">
        <p>Ayush Rameja</p>
      </div>
      <div className="nav-links flex justify-content-between">
        <a className="tdn" href="#">
          <StaggeredText text="GET IN TOUCH" />
        </a>
        <a className="tdn dark" href="#">
          <StaggeredText text="MENU" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
