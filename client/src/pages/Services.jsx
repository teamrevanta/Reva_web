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
                    Driven by passion, Team Revanta , share immense pride to
                    announce that we secured 2nd rank among all technical teams
                    in Shell Eco Marathon Asia 2012 held in Kuala Lumpur ,
                    Malaysia. It's not just the accolades we've earned. It's
                    about the journey we undertook. Let's carry this spirit
                    forward, continue to support each other, and conquer new
                    heights together.
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
                    In the year 2021, team participated in Electric Solar
                    Vehicle Championship, led by Abhisekh Kumar(PIE). With our
                    hard work and collective efforts, team secured 5th rank in
                    design report and 7th in Virtuals. It's all about the
                    challenges we faced , the team efforts that brought us to
                    this moment, and at last We stood United as a Team.
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
                    In the year 2023, Our team participated in Electric Solar
                    Vehicle Championship, led by Rajat Raj(ME). The team secured
                    1st rank in Business plan, 3rd in Cost and Manufacturing
                    round. We embraced the challenges not as obstacles, but as
                    opportunities to prove the strength of our team. Here's to
                    Team Revanta - to our success, to our hard work and to
                    countless victories that lie ahead. Cheers !!
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
