import React from "react";
import "./Sponsor.css";

const Sponsor = () => {
  // Placeholder data for sponsors
  const sponsors = [
    {
      id: 1,
      name: "Zomato",
      logo: "data:image/png;base64,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",
      website: "https://www.zomato.com/india",
    },
    {
      id: 2,
      name: "Amazon",
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png",
      website: "https://www.amazon.in/",
    },
    // Add more sponsors as needed
  ];
  const downloadPdf = () => {
    const pdfPath = "./docs/REVANTA BROCHURE.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "REVANTA BROCHURE.pdf";
    link.click();
  };

  return (
    <>
      <div className="Sponser_heading">
        <h3>Sponsor Us</h3>
        <div className="redline"></div>
        <div className="Sponser_subhead">
          "Contribute towards a greener India and play your role in to forefront
          in the solar race"
        </div>
        <button onClick={downloadPdf} className="sponsor-download">
          REVANTA BROCHURE
          <i className="fa fa-download" aria-hidden="true"></i>
        </button>
      </div>

      <div class="Sponser_row">
        <div class="Sponser_plans">
          <img src="./images/sponsor/pngwing.com (32).png" alt="32" />

          <h3>Principal Partners</h3>
          <h3>INR 41,000 And Above</h3>
          <ul>
            <li>Large size logo on the team website,banners, and posters.</li>
            <li>Prederred position for a large size logo on a team car.</li>
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
        <div class="Sponser_plans">
          <img src="./images/sponsor/pngwing.com (31).png" alt="31" />

          <h3>Gold Partners</h3>
          <h3>INR 21,000 - 40,000</h3>
          <ul>
            <li>Large size logo on the team website,banners, and posters.</li>
            <li>Prederred position for a logo on a team car.</li>
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
        <div class="Sponser_plans">
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
        <div class="Sponser_plans">
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
      <div className="PreviousSponsors">
        <div className="Sponser_heading">
          <h3>Our Previous Sponsors</h3>
          <div className="redline2"></div>
          <div className="Sponser_subhead">
            it was only possible because of the support of these companies that
            our journey has been successful. <br />
            So, as a token of respect,we put out the names of these companies in
            front of you dignitaries
          </div>
        </div>
        <div className="Sponser_img">
          <img src="./images/sponsor/Screenshot (44).png" alt="44" />
        </div>
      </div>
      <div className="BankDetails">
        <div className="Sponser_heading">
          <h3>Bank Details</h3>
          <div className="redline3"></div>
          <div className="details">
            <p>Account Name - REVANTA N.I.T JAMSHEDPUR</p>
            <p>Account Number - 31071926039</p>
            <p>IFSC CODE - SBIN0001882</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsor;