import React from "react";
import { Link } from "react-router-dom";

const About = () => {
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
                  Revanta Supermileage was started in the year 2009 as a result
                  of the dream of a group of students who wanted to break the
                  barriers of mileage. The team is being guided by Dr. KDP Singh
                  (Mech. Dept) and Dr. Madhu Singh (Elect. Dept). Within a year
                  of its inception, it participated in two International events,
                  namely- SAE Supermileage-2010, held in Michigan, USA and Shell
                  Eco Marathon Asia- 2011 and 2012, successively held in
                  Kualalumpur, Malaysia. Both of these were under the Gasoline
                  category.
                </p>
                <Link to="/Reva_web/aboutPage">Read More</Link>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="img-box">
                {/* <img src="images/about-image.jpg" alt="hjbj" /> */}
                <img
                  src="./images/participation/img43.JPG"
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
