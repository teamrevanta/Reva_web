import React from "react";
import "./Sponsor.css";

const Sponsor = () => {
  const downloadPdf = () => {
    const pdfPath = "./docs/REVANTA BROCHURE.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "REVANTA BROCHURE.pdf";
    link.click();
  };

  return (
    <div className="Sponser_us">
      <div className="Sponser_heading">
        <h3>Sponsor Us</h3>

        <div className="Sponser_subhead">
          "Contribute towards a greener India and play your role in to forefront
          in the solar race"
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

      <div className="WhySponsors">
        <div className="Sponser_heading">
          <h3>Why Should You Help Us?</h3>

          <div className="Sponser_subhead">
            <ul className="why_spo_ul">
              <li className="why_spo_li">
                If a company's name is associated with an environment-friendly
                initiative, it would also help the company to grow.
              </li>
              <li className="why_spo_li">
                Sponsoring us would mean that the company is flexible to the
                demands of the present market.
              </li>
              <li className="why_spo_li">
                It would be in line with the company's CSR policies.
              </li>
              <li className="why_spo_li">
                It would also help PM Modi's AATMANIRBHAR BHARAT initiative,
                which is an essential block in making India from a developing to
                a developed nation.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="BankDetails">
        <div className="Sponser_heading">
          <h3>Bank Details</h3>

          <div className="details">
            <p>Account Name - REVANTA N.I.T JAMSHEDPUR</p>
            <p>Account Number - 31071926039</p>
            <p>IFSC CODE - SBIN0001882</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
