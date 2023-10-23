import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {" "}
      <header className="header_section">
        <div className="header_top">
          <div className="container-fluid header_top_container">
            <a className="navbar-brand " href="index.html">
              {" "}
              Team<span>Revanta</span>{" "}
            </a>
            <div className="contact_nav">
              <a href="">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>Location</span>
              </a>
              <a href="">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>Call : +01 123455678990</span>
              </a>
              <a href="">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>teamrevanta@gmail.com</span>
              </a>
            </div>
            <div className="social_box">
              <a href="https://www.facebook.com/aboutrevanta/">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>

              <a href="https://in.linkedin.com/company/team-revanta">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/revanta_nit_jsr/?hl=en">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand navbar_brand_mobile" href="index.html">
                {" "}
                Team<span>Revanta</span>{" "}
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <Link to="/Reva_web/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Reva_web/achievements" className="nav-link">
                      Achievements
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Reva_web/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Reva_web/gallery" className="nav-link">
                      Gallery
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Reva_web/contact" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Reva_web/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <form className="form-inline">
                    <button
                      className="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    >
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
