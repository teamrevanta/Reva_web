import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <section className="info_section my-font">
        <div className="info_container layout_padding2">
          <div className="container">
            <a href="" className=" navbar-brand ">
              <div className="info_logo">
                Team<span>Revanta</span>{" "}
              </div>
            </a>
            <div className="info_main">
              <div className="row">
                <div className="col-md-2 col-lg-2">
                  <div className="info_link-box">
                    <h5>Useful Link</h5>
                    <ul className="info_link-ul">
                      <li className=" info_link-li">
                        <Link to="/" className=" ">
                          Home
                        </Link>
                      </li>
                      <li className="info_link-li">
                        <Link to="/ourteam" className=" ">
                          Team
                        </Link>
                      </li>
                      <li className="info_link-li">
                        <Link to="/achievements" className=" ">
                          Achievements
                        </Link>
                      </li>
                      <li className="info_link-li">
                        <Link to="/Gallery" className=" ">
                          Gallery
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2 ">
                  <h5>Manufacturing</h5>
                  <p>
                    Sokhi Enterprise Pvt Ltd sponsors us to do fabrication
                    works.
                  </p>
                </div>
                <div className="col-md-2 mx-auto  ">
                  <h5>social media</h5>
                  <div className="social_box">
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
                <div className="col-md-2">
                   <div className="info_link-box">
                    <h5>User Policy</h5>
                    <ul className="info_link-ul">
                      <li className=" info_link-li">
                        <Link to="/PrivacyPolicy" className=" ">
                          Privacy & Policy
                        </Link>
                      </li>
                      <li className="info_link-li">
                        <Link to="/TermAndCondition" className=" ">
                          Terms & Conditions
                        </Link>
                      </li>
                      <li className="info_link-li">
                        <Link to="/refundAndCancellation" className=" ">
                          Refund & Cancellation
                        </Link>
                      </li>
                      <li className="info_link-li">
                        <Link to="/shippingPolicy" className=" ">
                          Shipping Policy
                        </Link>
                      </li>
                      <li className="info_link-li">
                        <Link to="/contact" className=" ">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                 
                </div>
                 <div className="col-md-2">
                  <h5>Nit Jamshedpur</h5>
                  <p className="">
                    NIT Jamshedpur is an Institute of National Importance for
                    Technical Education located at Jamshedpur, Jharkhand, India
                    and is directly under the control of the Ministry of
                    Education (MHRD).
                  </p>
                </div>
              </div>
            </div>
            <div className="info_bottom">
              <div className="row">
                <div className="col-lg-9">
                  <div className="info_contact ">
                    <div className="row">
                      <div className="col-md-4">
                        <a
                          href="https://maps.app.goo.gl/7X2tga4AHiFQ9gcn6"
                          target="_blank"
                          rel="noreferrer"
                          className="link-box"
                        >
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                          <span>Nit Jamshedpur</span>
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a
                          href="https://wa.me/8210839665"
                          target="_blank"
                          rel="noreferrer"
                          className="link-box"
                        >
                          <i className="fa fa-phone" aria-hidden="true"></i>
                          <span>Call +91 8210839665</span>
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=teamrevanta@gmail.com"
                          target="_blank"
                          rel="noreferrer"
                          className="link-box"
                        >
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                          <span>revanta@nitjsr.ac.in</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-1">
                  <div className="info_form ">
                    <form action="">
                      <input type="email" placeholder="Enter Your Email" />
                      <button>
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      </button>
                    </form>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          Designed By:
          <a
            href="https://www.linkedin.com/in/bittu-thakur-618774211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
          >
            Bittu Kumar Thakur
          </a>{" "}
          &{" "}
          <a
            href="https://www.linkedin.com/in/shaket-shubham-7939b6214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
          >
            Shaket Shubham
          </a>
        </div>
      </section>

      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By Team
            Revanta, Nit Jamshedpur
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
