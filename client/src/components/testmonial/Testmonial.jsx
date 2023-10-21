import React from "react";

const Testmonial = () => {
  return (
    <div>
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Testimonial</h2>
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
                              <img src="images/rajat.jpeg" alt="" />
                            </div>
                            <h5>Rajat Raj</h5>
                          </div>
                          <div className="detail-box">
                            <p>
                              Team Revanta is an amazing opportunity to nourish
                              the leadership,learning skills in budding
                              engineers. It helped me to bag offers from
                              Deloitte.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="box">
                          <div className="client_id">
                            <div className="img-box">
                              <img src="images/abhisek.jpeg" alt="" />
                            </div>
                            <h5>Abhisek</h5>
                          </div>
                          <div className="detail-box">
                            <p>
                              Team Revanta is an amazing opportunity to nourish
                              the leadership,learning skills in budding
                              engineers. It helped me to bag offers from DMI
                              Finance.
                            </p>
                          </div>
                        </div>
                      </div>
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
