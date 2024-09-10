import "../styles/nav.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-wrapper">
        <div className="logo">
          <p>AR7</p>
        </div>
        <div className="nav-links">
          <a href="#">About</a>
          <a href="#">Work</a>
          <a href="#">Contact</a>
          <a href="#">Blogs</a>
        </div>
        <div className="cta">
          <a href="#">Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
