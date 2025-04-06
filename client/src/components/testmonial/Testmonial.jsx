import React from "react";
import { Col} from "react-bootstrap";

const Testmonial = () => {
  return (
    <div>
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <Col xs={12} className="text-center">
                                 <h2 className="section-title">
                                 Captain's <span>Voice</span>
                                 </h2>
                                 <div className="section-divider"></div>
         </Col>
          </div>
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div
                id="customCarousel2"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="row">
                  <div className="col-md-11">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="box">
                          <div className="client_id">
                            <div className="img-box">
                              <img src="images/Amit.jpg" alt="" />
                            </div>
                            <h5>Amit</h5>
                            <p>2k22</p>
                          </div>
                          <div className="detail-box">
                            <p>
                            Leadership is never a solo ride. It’s trust, passion, and a bond built on shared moments. These brilliant minds, my solar-powered family, stood tall through every challenge, every ticking clock. Together, we didn’t just create an EV – we crafted a legacy of resilience and joy. Through every storm, we held onto laughter, we thrived on trust. Here's to chasing dreams, to the horizon, and to the unwavering spirit of Revanta!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="box">
                          <div className="client_id">
                            <div className="img-box">
                              <img
                                src="images/members2k21/Priyanshu.jpg"
                                alt=""
                              />
                            </div>
                            <h5>Priyanshu Raj</h5>
                            <p>2k21</p>
                          </div>
                          <div className="detail-box">
                            <p>
                              "Team Revanta's work culture is a symphony of
                              collaboration and expertise. Within our technical
                              pursuits, we foster an environment where every
                              member's contribution is valued and respected. As
                              the team captain, steering this collective effort
                              has been a privilege. Witnessing the fusion of
                              diverse talents and the unwavering dedication to
                              achieving our goals has been an immensely
                              fulfilling experience."
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="box">
                          <div className="client_id">
                            <div className="img-box">
                              <img src="images/rajat.jpeg" alt="" />
                            </div>
                            <h5>Rajat Raj</h5>
                            <p>2k20</p>
                          </div>
                          <div className="detail-box">
                            <p>
                              Steering Revanta taught me: leadership ain't
                              solo. It's trust, passion, shared laughter.These
                              grease-stained geniuses, my sun-powered family. We
                              weathered every storm, every deadline, with
                              laughter and trust. Built more than an EV, a
                              legacy of sunshine and grit. Keep chasing the
                              horizon,Revanta!
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="carousel-item">
                        <div className="box">
                          <div className="client_id">
                            <div className="img-box">
                              <img src="images/abhisek.jpeg" alt="" />
                            </div>
                            <h5>Abhishek Kumar</h5>
                            <p>2k19</p>
                          </div>
                          <div className="detail-box">
                            <p>
                              "Working with a team always comes with numerous
                              challenges. Successfully steering through them
                              helps you grow in every dimension. One should see
                              these challenges as opportunities for
                              self-development, and being a part of a team like
                              Team Revanta has been a comprehensive package of
                              development for me."
                            </p>
                          </div>
                        </div>
                      </div>
                      */}
                    </div>
                  </div>
                  <div className="col-md-1">
                    <ol className="carousel-indicators">
                      <li
                        data-target="#customCarousel2"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li data-target="#customCarousel2" data-slide-to="1"></li>
                      <li data-target="#customCarousel2" data-slide-to="2"></li>
                      {/* <li data-target="#customCarousel2" data-slide-to="3"></li> */}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testmonial;
