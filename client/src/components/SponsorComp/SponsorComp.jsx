import React from "react";
import "./SponsorComp.css";
import { Link } from "react-router-dom";

const SponsorComp = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="Sponser_us">
      <div className="heading_container heading_center">
        <h2>
          Sponsor <span> Us</span>
        </h2>
      </div>
      <div className="Sponser_heading">
        <div className="Sponser_subhead">
          "Contribute towards a greener India and play your role in bringing it
          to forefront in the solar race."
        </div>
        {/* <button onClick={downloadPdf} classNameName="sponsor-download">
          REVANTA BROCHURE
          <i classNameName="fa fa-download" aria-hidden="true"></i>
        </button> */}
      </div>

      <div className="Sponser_row">
        <div className="Sponser_plans">
          <img src="./images/sponsor/pngwing.com (32).png" alt="32" />

          <h3>Principal Partners</h3>
          <h3>INR 41,000 And Above</h3>
          <ul>
            <li>Large size logo on the team website,banners, and posters.</li>
            <li>Preferred position for a large size logo on a team car.</li>
            <li>Special acknowledgment in media and press releases.</li>
            <li>
              Special mention and promotion in events and public gatherings
              where the car is on display.
            </li>
          </ul>

          <button>
            <a href="https://wa.me/9155360718" target="_blank" rel="noreferrer">
              Know More{" "}
            </a>
          </button>
        </div>
        <div className="Sponser_plans">
          <img src="./images/sponsor/pngwing.com (31).png" alt="31" />

          <h3>Gold Partners</h3>
          <h3>INR 21,000 - 40,000</h3>
          <ul>
            <li>Large size logo on the team website,banners, and posters.</li>
            <li>Preferred position for a logo on a team car.</li>
            <li>Acknowledgment in media and press releases.</li>
            <li>
              Mention and promotion in events and public gatherings where the
              car is on display.
            </li>
          </ul>
          <button>
            <a href="https://wa.me/9155360718" target="_blank" rel="noreferrer">
              Know More{" "}
            </a>
          </button>
        </div>
        <div className="Sponser_plans">
          <img src="./images/sponsor/pngwing.com (29).png" alt="29" />

          <h3>Silver Partners</h3>
          <h3>INR 11,000 - 20,000</h3>
          <ul>
            <li>Medium size logo on the team website,banners, and posters.</li>
            <li>Position for a logo on a team car.</li>
          </ul>
          <button>
            <a href="https://wa.me/9155360718" target="_blank" rel="noreferrer">
              Know More{" "}
            </a>
          </button>
        </div>
        <div className="Sponser_plans">
          <img src="./images/sponsor/pngwing.com (30).png" alt="30" />

          <h3>Bronze Partners</h3>
          <h3>Below INR 11,000</h3>
          <ul>
            <li>Small size logo on the team website and banners.</li>
            <li>Position for a small size logo on a team car.</li>
          </ul>

          <button>
            <a href="https://wa.me/9155360718" target="_blank" rel="noreferrer">
              Know More{" "}
            </a>
          </button>
        </div>
      </div>
      {/* <div className="service_section btn-box">
        <Link to="./sponsor" onClick={scrollToTop}>
          Read More
        </Link>
      </div> */}
      <Link to="./sponsor" onClick={scrollToTop}>
        {" "}
        <button className="Down_button"> Read More </button>{" "}
      </Link>
    </div>
  );
};

export default SponsorComp;
