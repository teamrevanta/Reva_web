import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <section className="about_section layout_padding">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    Welcome to <span>Team Revanta</span>
                  </h2>
                </div>
                <p>
                  Team Revanta is the official technical team of NIT Jamshedpur
                  which design solar electric vehicles.
                  <br /> We aim for designing a highly efficient mileage hybrid
                  solar electric vehicle with minimal carbon footprint. Revanta
                  Supermileage was started in the year 2009 as a result of the
                  dream of a group of students who wanted to break the barriers
                  of mileage. The team is being guided by Dr. KDP Singh (Mech.
                  Dept) and Dr. Madhu Singh (Elect. Dept).
                  <br />
                  Switching from gasoline vehicles to electric vehicles in 2014.
                  Just after the break of approx. 2 years which corona pandemic
                  imposed on us, we shifted to four wheels.
                </p>
                <Link to="/aboutPage" onClick={scrollToTop}>
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="img-box">
                {/* <img src="images/about-image.jpg" alt="hjbj" /> */}
                <img
                  src="./images/car/Screenshot (137).png"
                  alt="hjbj"
                  style={{ borderRadius: "12px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
