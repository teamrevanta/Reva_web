import React from "react";

const Testmonial = () => {
  return (
    <div>
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Captain's Voice</h2>
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
                            <p>2k20</p>
                          </div>
                          <div className="detail-box">
                            <p>
                              "Revanta isn't just a club; it's a vibrant
                              ecosystem of ideas, innovation, and camaraderie.
                              Being part of Revanta was more than building solar
                              electric vehicles; it was a transformative journey
                              where passion met purpose"
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
                            <p>2k19</p>
                          </div>
                          <div className="detail-box">
                            <p>
                              "Together, we harnessed the power of renewable
                              energy, shaping not just our vehicles but also our
                              futures. Revanta taught us that sustainable
                              technology isn't just a concept; it's a way of
                              life, and we leave with a deep sense of pride in
                              contributing to a greener tomorrow."
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="box">
                          <div className="client_id">
                            <div className="img-box">
                              <img src="images/Priyanshu.jpeg" alt="" />
                            </div>
                            <h5>Priyanshu</h5>
                            <p>2k21</p>
                          </div>
                          <div className="detail-box">
                            <p>
                              "It became a thriving ecosystem brimming with
                              boundless ideas, unwavering innovation, and
                              genuine camaraderie. Being a part of Revanta
                              transcended the mere act of constructing solar
                              electric vehicles; it evolved into a profound and
                              transformative journey where our passion
                              seamlessly intertwined with purpose."
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
