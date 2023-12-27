import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      {" "}
      <section className="service_section layout_padding">
        <div className="container ">
          <div className="heading_container heading_center">
            <h2>
              Our <span>Achievements</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-4">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s1.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>SAE SUPERMILEAGE, USA</h5>
                  <p>
                    Our team participated in SAE Supermileage 2010 held in
                    Michigan, USA. Through collaborative efforts, innovation,
                    and dedication, we have secured the overall 3rd position.
                    Team Revanta’s success at SAE brings unparalleled glory and
                    pride to our Institute NIT Jamshedpur.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s2.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Shell Eco Marathon, Malaysia</h5>
                  <p>
                    Team Revanta proudly announces 2nd place in Shell Eco
                    Marathon Asia 2012 in Kuala Lumpur, Malaysia. Beyond
                    accolades, it's about the journey and conquering new heights
                    together, fostering a spirit of continuous improvement and
                    teamwork led by our passionate members.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s3.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>ESVC'21</h5>
                  <p>
                    In 2021, Team Revanta in Electric Solar Vehicle Championship
                    secured 5th in design and 7th in Virtuals. United as a team,
                    we faced challenges, emerged stronger, and remain committed
                    to pushing the boundaries of sustainable technology, led by
                    the visionary Abhisekh Kumar(PIE).
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s4.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>ESVC'23</h5>
                  <p>
                    In 2023, Revanta in Electric Solar Vehicle Championship
                    secured 1st in Business plan, 3rd in Cost and Manufacturing.
                    Cheers to countless victories ahead, as we look forward to
                    pioneering innovations in the field of electric vehicles,
                    led by the dynamic leadership of Rajat Raj(ME).
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s5.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Championship-2014</h5>
                  <p>
                    The team participated in the Electric Solar Vehicle
                    Championship-2014 led by Gaurav Singh (MME) and came out
                    with flying colours, securing the fourth rank in the
                    virtuals and an over all remarkable performance in the
                    dynamic event.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s6.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Hybrid-Vehicle</h5>
                  <p>
                    Currently the team is engaged in doing research to improve
                    the mileage and efficiency of Electric-Solar Vehicle. The
                    team is also looking forward to make an ultra-light
                    cost,effective hybrid vehicle. The team switched into the
                    Electric Solar Hybrid Category.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <Link to="/Reva_web/achievementPage" onClick={scrollToTop}>
              Read More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
