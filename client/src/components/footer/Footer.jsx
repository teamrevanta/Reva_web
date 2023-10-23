import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="info_section ">
        <div className="info_container layout_padding2">
          <div className="container">
            <div className="info_logo">
              <a className="navbar-brand" href="index.html">
                {" "}
                Team<span>Revanta</span>{" "}
              </a>
            </div>
            <div className="info_main">
              <div className="row">
                <div className="col-md-3 col-lg-2">
                  <div className="info_link-box">
                    <h5>Useful Link</h5>
                    <ul>
                      <li className=" active">
                        <Link to="/Reva_web/" className=" ">
                          Home
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/Reva_web/about" className=" ">
                          About
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/Reva_web/achievements" className=" ">
                          Achievements
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/Reva_web/gallery" className=" ">
                          Gallery
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/Reva_web/contact" className=" ">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <h5>Manufacturing</h5>
                  <p>Sokhi Enterprise sponsors us to do fabrication works.</p>
                </div>
                <div className="col-md-3 mx-auto  ">
                  <h5>social media</h5>
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
                <div className="col-md-3">
                  <h5>Nit Jamshedpur</h5>
                  <p>
                    It is the top educational institue under central government
                    promoting various clubs for development of budding
                    engineers.
                  </p>
                </div>
              </div>
            </div>
            <div className="info_bottom">
              <div className="row">
                <div className="col-lg-9">
                  <div className="info_contact ">
                    <div className="row">
                      <div className="col-md-3">
                        <a href="#" className="link-box">
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                          <span>Location</span>
                        </a>
                      </div>
                      <div className="col-md-5">
                        <a href="#" className="link-box">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                          <span>Call +01 1234567890</span>
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a href="#" className="link-box">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                          <span>teamrevanta@gmail.com</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="info_form ">
                    <form action="">
                      <input type="email" placeholder="Enter Your Email" />
                      <button>
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="https://html.design/">Team Revanta, Nit Jamshedpur</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
