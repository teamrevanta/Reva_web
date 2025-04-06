import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SponsorComp.css";

const SponsorComp = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const sponsorPlans = [
    {
      title: "Principal Partners",
      price: "INR 41,000 And Above",
      image: "./images/sponsor/pngwing.com (32).png",
      benefits: [
        "Large size logo on team website, banners, and posters",
        "Preferred position for logo on team car",
      ]
    },
    {
      title: "Gold Partners",
      price: "INR 21,000 - 40,000",
      image: "./images/sponsor/pngwing.com (31).png",
      benefits: [
        "Large size logo on marketing materials",
        "Logo placement on team car",
        "Media acknowledgment",
      ]
    },
    {
      title: "Silver Partners",
      price: "INR 11,000 - 20,000",
      image: "./images/sponsor/pngwing.com (29).png",
      benefits: [
        "Medium size logo on marketing materials",
        "Logo on team car"
      ]
    },
    {
      title: "Bronze Partners",
      price: "Below INR 11,000",
      image: "./images/sponsor/pngwing.com (30).png",
      benefits: [
        "Small logo on website and banners",
        "Small logo on team car"
      ]
    }
  ];

  return (
    <Container className="sponsor-page py-5">
      {/* Main Heading */}
      <Row className="justify-content-center mb-4">
        <Col xs={12} className="text-center">
          <h2 className="display-4 fw-bold mb-3">
            Sponsor <span style={{ color: "#da7426" }}>Us</span>
          </h2>
          <div className="mx-auto" style={{ width: "80px", height: "4px", backgroundColor: "#da7426" }}></div>
          <p className="lead mt-4 mx-auto" style={{ maxWidth: "800px" }}>
            "Contribute towards a greener India and join the solar revolution"
          </p>
        </Col>
      </Row>

      {/* Sponsor Plans */}
      <Row className="g-4 justify-content-center mb-5">
        {sponsorPlans.map((plan, index) => (
          <Col key={index} lg={3} md={6} className="mb-4">
            <div className="sponsor-card h-100 p-4 text-center shadow-sm">
              <img 
                src={plan.image} 
                alt={plan.title} 
                className="img-fluid mb-4" 
                style={{ height: "100px", objectFit: "contain" }}
              />
              <h3 className="fw-bold mb-3">{plan.title}</h3>
              <h4 className="text-muted mb-4">{plan.price}</h4>
              <ul className="text-start ps-3 mb-4">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="mb-2">{benefit}</li>
                ))}
              </ul>
              <Button 
                href="https://wa.me/9155360718" 
                target="_blank" 
                className="mt-auto w-100"
                style={{ 
                  backgroundColor: "#da7426",
                  borderColor: "#da7426",
                  transition: "all 0.3s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.backgroundColor = "#da7426";
                }}
              >
                Know More
              </Button>
            </div>
          </Col>
        ))}
      </Row>

      {/* Read More Button */}
      <Row className="justify-content-center mt-4">
        <Col xs="auto">
          <Link to="./sponsor" onClick={scrollToTop}>
            <Button 
              className="px-4 py-2 fw-bold"
              style={{ 
                backgroundColor: "#da7426",
                borderColor: "#da7426",
                color: "#fff",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#da7426";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.backgroundColor = "#da7426";
              }}
            >
              Read More
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default SponsorComp;