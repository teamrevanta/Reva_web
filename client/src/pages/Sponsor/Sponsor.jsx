import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Sponsor.css";

const Sponsor = () => {
  const downloadPdf = () => {
    const pdfPath = "./docs/REVANTA BROCHURE.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "REVANTA BROCHURE.pdf";
    link.click();
  };

  const sponsorPlans = [
    {
      title: "Principal Partners",
      price: "INR 41,000 And Above",
      image: "./images/sponsor/pngwing.com (32).png",
      benefits: [
        "Large size logo on team website, banners, and posters",
        "Preferred position for logo on team car",
        "Special acknowledgment in media releases",
        "Promotion at public events"
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
        "Event promotion"
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

  const whySponsorPoints = [
    "Enhance your brand with eco-friendly initiatives",
    "Demonstrate market adaptability and innovation",
    "Align with corporate social responsibility goals",
    "Support India's AATMANIRBHAR BHARAT initiative"
  ];

  return (
    <Container fluid className="sponsor-page py-5">
      {/* Main Heading */}
      <Row className="justify-content-center mb-5">
        <Col xs={12} className="text-center">
          <h2 className="display-4 fw-bold mb-3">
            Sponsor <span style={{ color: "#da7426" }}>Us</span>
          </h2>
          <div className="mx-auto" style={{ width: "80px", height: "4px", backgroundColor: "#da7426" }}></div>
          <p className="lead mt-4 mx-auto" style={{ maxWidth: "800px" }}>
            "Contribute towards a greener India and join the solar revolution"
          </p>
          <Button 
            onClick={downloadPdf} 
            variant="outline" 
            className="mt-3 px-4 py-2 fw-bold"
            style={{ 
              borderColor: "#da7426",
              color: "#000000",
              transition: "all 0.3s"
            }}
          >
            <i className="fas fa-download me-2"></i> DOWNLOAD BROCHURE
          </Button>
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
                className="mt-auto w-100 download"
                style={{ 
                  backgroundColor: "#da7426",
                  borderColor: "#da7426",
                  transition: "all 0.3s"
                }}
              >
                Know More
              </Button>
            </div>
          </Col>
        ))}
      </Row>

      {/* Previous Sponsors */}
      <Row className="mb-5">
        <Col xs={12} className="text-center mb-4">
          <h3 className="display-5 fw-bold">Our Previous Sponsors</h3>
          <div className="mx-auto" style={{ width: "80px", height: "4px", backgroundColor: "#da7426" }}></div>
          <p className="lead mt-4 mx-auto" style={{ maxWidth: "800px" }}>
            Our success is made possible by these visionary partners
          </p>
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          <img 
            src="./images/sponsor/Screenshot (44).png" 
            alt="Previous Sponsors" 
            className="img-fluid rounded shadow"
            style={{ maxHeight: "500px" }}
          />
        </Col>
      </Row>

      {/* Why Sponsor */}
      <Row className="mb-5 py-4 bg-light rounded">
        <Col xs={12} className="text-center mb-4">
          <h3 className="display-5 fw-bold">Why Sponsor Us?</h3>
          <div className="mx-auto" style={{ width: "80px", height: "4px", backgroundColor: "#da7426" }}></div>
        </Col>
        <Col md={10} className="mx-auto">
          <ul className="list-unstyled">
            {whySponsorPoints.map((point, index) => (
              <li key={index} className="mb-3 d-flex">
                <i className="fas fa-check-circle me-3 mt-1" style={{ color: "#da7426" }}></i>
                <span className="fs-5">{point}</span>
              </li>
            ))}
          </ul>
        </Col>
      </Row>

      {/* Bank Details */}
      <Row className="justify-content-center">
        <Col md={8} className="text-center p-4 bg-white rounded shadow-sm">
          <h3 className="display-5 fw-bold mb-4">Bank Details</h3>
          <div className="mx-auto mb-4" style={{ width: "80px", height: "4px", backgroundColor: "#da7426" }}></div>
          <div className="fs-5">
            <p className="mb-3"><strong>A/c Name:</strong> REVANTA N.I.T JAMSHEDPUR</p>
            <p className="mb-3"><strong>A/c Number:</strong> 31071926039</p>
            <p className="mb-0"><strong>IFSC CODE:</strong> SBIN0001882</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Sponsor;