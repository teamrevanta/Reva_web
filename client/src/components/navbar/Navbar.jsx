import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {" "}
      <header className="header_section">
        <div className="header_top">
          <div className="container-fluid header_top_container">
            <a className="navbar-brand " href="">
              {" "}
              Team<span>Revanta</span>{" "}
            </a>
            <div className="contact_nav">
              <a
                href="https://maps.app.goo.gl/7X2tga4AHiFQ9gcn6"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>Nit Jamshedpur</span>
              </a>
              <a
                href="https://wa.me/9155360718"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>Call : +91 9155360718</span>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=revanta@nitjsr.ac.in"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>revanta@nitjsr.ac.in</span>
              </a>
            </div>
            <div className="social_box" target="_blank">
              <a
                href="https://www.facebook.com/aboutrevanta/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>

              <a
                href="https://in.linkedin.com/company/team-revanta"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/revanta_nit_jsr/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand navbar_brand_mobile" href="#">
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
                    <Link to="/Reva_web/Gallery" className="nav-link">
                      Gallery
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Reva_web/contact" className="nav-link">
                      Contact Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/Reva_web/ourteam" className="nav-link">
                      Team
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Reva_web/sponsor" className="nav-link">
                      {/* <span style={{ color: "orange", fontWeight: "900" }}> */}
                      Sponsor Us {/* </span> */}
                    </Link>
                  </li>
                  <li className="nav-item" style={{ fontSize: "24px" }}>
                    <Link
                      to="/Reva_web/youtube"
                      className="nav-link"
                      style={{ fontSize: "24px" }}
                    >
                      <i
                        className="fa fa-youtube"
                        aria-hidden="true"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </Link>
                  </li>
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
