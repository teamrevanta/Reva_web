import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaEnvelope, FaUser, FaLinkedin, FaUniversity } from "react-icons/fa";
import "./FacultyAdvisorDetails.css";

const FacultyAdvisorDetails = () => {
  const advisors = [
    {
      id: 1,
      name: "Dr. Krishna Deo Prasad Singh",
      image: "./images/FacultyAdvisor/Dr. KDP Singh.jpg",
      designation: "Associate Professor",
      department: "Mechanical Engineering, NIT Jamshedpur",
      email: "kdpsingh.me@nitjsr.ac.in",
      profileLink: "https://www.nitjsr.ac.in/people/profile/ME106",
      linkedinLink: "#",
    },
    {
      id: 2,
      name: "Dr. Madhu Singh",
      image: "./images/FacultyAdvisor/Dr MADHU SINGH.jpg",
      designation: "Associate Professor",
      department: "Electrical Engineering, NIT Jamshedpur",
      email: "madhu.ee@nitjsr.ac.in",
      profileLink: "https://www.nitjsr.ac.in/people/profile/EE105",
      linkedinLink: "#",
    },
  ];

  return (
    <Container className="faculty-advisors-section py-5">
      <Row className="justify-content-center mb-5">
        <Col xs={12} className="text-center">
          <h2 className="section-title">
            Faculty <span>Advisors</span>
          </h2>
          <div className="section-divider"></div>
        </Col>
      </Row>

      <Row className="justify-content-center g-4 px-3">
        {advisors.map((advisor) => (
          <Col key={advisor.id} xl={5} lg={6} md={10} sm={12}>
            <Card className="faculty-card h-100 shadow-lg">
              <Row className="g-0 h-100">
                <Col md={5} className="d-flex align-items-center justify-content-center p-4">
                  <div className="faculty-image-container ratio ratio-1x1">
                    <Card.Img
                      src={advisor.image}
                      alt={advisor.name}
                      className="img-fluid rounded-circle"
                    />
                  </div>
                </Col>
                <Col md={7}>
                  <Card.Body className="faculty-info d-flex flex-column">
                    <Card.Title className="faculty-name">{advisor.name}</Card.Title>
                    <Card.Subtitle className="faculty-designation mb-2">
                      {advisor.designation}
                    </Card.Subtitle>
                    <Card.Text className="faculty-department">
                      <FaUniversity className="me-2" />
                      {advisor.department}
                    </Card.Text>
                    <Card.Text className="faculty-email">
                      <FaEnvelope className="me-2" />
                      <a href={`mailto:${advisor.email}`}>{advisor.email}</a>
                    </Card.Text>
                    <div className="faculty-links mt-auto">
                      <a
                        href={advisor.profileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-orange btn-sm me-2"
                        title="University Profile"
                      >
                        <FaUser className="me-1" /> Profile
                      </a>
                      {advisor.linkedinLink && (
                        <a
                          href={advisor.linkedinLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-orange btn-sm"
                          title="LinkedIn Profile"
                        >
                          <FaLinkedin className="me-1" /> LinkedIn
                        </a>
                      )}
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FacultyAdvisorDetails;